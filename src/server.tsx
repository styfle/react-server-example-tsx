import { createServer } from 'http';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as fs from 'fs';
import AppComponent from './components/app';
import { getItems } from './db';
import { faviconUrl, stylesUrl, reactUrl, reactDomUrl, bundleUrl, propsUrl, containerId } from './constants';

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const App = React.createFactory(AppComponent);
const PORT = 3007;
const suffix = isProd ? '.production.min.js' : '.development.js';

createServer((req, res) => {
    console.log(`${req.httpVersion} ${req.method} ${req.url}`);
    if (req.url === '/') {
        const props: AppProps = { items: getItems() };
        const reactHtml = renderToString(App(props));
        const pageHtml = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${faviconUrl}" rel="icon" type="image/x-icon" />
                <title>React Example</title>
                <link rel="stylesheet" href="${stylesUrl}" />
            </head>
            <body>
                <div id="${containerId}">${reactHtml}</div>
                <script src="${reactUrl}"></script>
                <script src="${reactDomUrl}"></script>
                <script src="${bundleUrl}"></script>
            </body>
        </html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(pageHtml)
    } else if (req.url === propsUrl) {
        const items = getItems();
        const props = {items: items};
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(props));
    } else if (req.url === reactUrl) {
        res.setHeader('Content-Type', 'text/javascript');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        fs.readFile(`./node_modules/react/umd/react${suffix}`, (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === reactDomUrl) {
        res.setHeader('Content-Type', 'text/javascript');
        res.setHeader('Cache-Control', 'public, max-age=86400');
        fs.readFile(`./node_modules/react-dom/umd/react-dom${suffix}`, (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === stylesUrl) {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./src/style.css', (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === bundleUrl) {
        res.setHeader('Content-Type', 'text/javascript');
        fs.readFile('./dist/browser.js', (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.end('Not Found');
    }

}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});