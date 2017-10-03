import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createFactory } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import App from './components/app';
import { fetchProps } from './props';
import { faviconUrl, stylesUrl, reactUrl, reactDomUrl, browserUrl, browserMapUrl, propsUrl, containerId } from './constants';
import { readFileAsync } from './file';

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const AppFactory = createFactory(App);
const PORT = process.env.PORT || 3007;
const suffix = isProd ? '.production.min.js' : '.development.js';

createServer(async (req, res) => {
    const { httpVersion, method, url } = req;
    console.log(`${httpVersion} ${method} ${url}`);
    try {
        if (url === '/') {
            res.setHeader('Content-Type', 'text/html');
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
            stream.pipe(res, { end: false });
            stream.on('end', () => {
            res.end(`</div>
                <script src="${reactUrl}"></script>
                <script src="${reactDomUrl}"></script>
                <script src="${browserUrl}"></script>
            </body>
            </html>`);
            });
        } else if (url === propsUrl) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(fetchProps()));
        } else if (url === reactUrl) {
            res.setHeader('Content-Type', 'text/javascript');
            res.setHeader('Cache-Control', 'public, max-age=86400');
            const data = await readFileAsync(`./node_modules/react/umd/react${suffix}`);
            res.end(data);
        } else if (url === reactDomUrl) {
            res.setHeader('Content-Type', 'text/javascript');
            res.setHeader('Cache-Control', 'public, max-age=86400');
            const data = await readFileAsync(`./node_modules/react-dom/umd/react-dom${suffix}`);
            res.end(data);
        } else if (url === stylesUrl) {
            res.setHeader('Content-Type', 'text/css');
            const data = await readFileAsync(`./src/${url}`);
            res.end(data);
        } else if (url === browserUrl || url === browserMapUrl) {
            res.setHeader('Content-Type', 'text/javascript');
            const data = await readFileAsync(`./dist${url}`);
            res.end(data);
        } else {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    } catch (e) {
        console.error(e);
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 500;
        res.end('500 Internal Error');
    }
}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});

