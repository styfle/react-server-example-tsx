import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createFactory, version as reactVersion } from 'react';
import { renderToNodeStream, version as reactDomVersion } from 'react-dom/server';
import { createReadStream } from 'fs';
import App from './components/app';
import { fetchProps } from './props';
import { lookup } from './mime-types';
import { control } from './cache-control';
import {
    faviconUrl,
    stylesUrl,
    browserUrl,
    browserMapUrl,
    propsUrl,
    containerId,
} from './constants';

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const AppFactory = createFactory(App);
const PORT = process.env.PORT || 3007;
const suffix = isProd ? '.production.min.js' : '.development.js';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    let { httpVersion, method, url } = req;
    console.log(`${httpVersion} ${method} ${url}`);
    if (!url || url === '/') {
        url = 'index.html';
    }
    try {
        if (url === 'index.html') {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 1));
            res.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${faviconUrl}" rel="icon" type="image/x-icon" />
                <title>React Example</title>
                <link rel="stylesheet" href="${stylesUrl}" />
            </head>
            <body>
            <div id="${containerId}">`);
            const stream = renderToNodeStream(AppFactory(fetchProps()));
            stream.pipe(
                res,
                { end: false },
            );
            stream.on('end', () => {
                res.end(`</div>
                <script src="https://unpkg.com/react@${reactVersion}/umd/react${suffix}"></script>
                <script src="https://unpkg.com/react-dom@${reactDomVersion}/umd/react-dom${suffix}"></script>
                <script src="${browserUrl}"></script>
            </body>
            </html>`);
            });
        } else if (url === propsUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.end(JSON.stringify(fetchProps()));
        } else if (url === stylesUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./src/${url}`;
            createReadStream(file).pipe(res);
        } else if (url === browserUrl || url === browserMapUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./dist${url}`;
            createReadStream(file).pipe(res);
        } else {
            url = 'notfound.txt';
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    } catch (e) {
        console.error(e);
        url = 'notfound.txt';
        res.setHeader('Content-Type', lookup(url));
        res.setHeader('Cache-Control', control(isProd, 0));
        res.statusCode = 500;
        res.end('500 Internal Error');
    }
}

if (!isProd) {
    createServer(handler).listen(PORT, () => {
        console.log(`Listening on ${PORT}...`);
    });
}
