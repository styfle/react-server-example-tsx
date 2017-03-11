console.log('Server booting...');
import * as http from 'http';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import AppComponent from './components/app';
import {getItems} from './db';
const NewApp = React.createFactory(AppComponent);
const PORT = 3007;

const isProd = process.env.NODE_ENV === 'production';
console.log('prod', isProd);

http.createServer((req, res) => {
    console.log(`${req.httpVersion} ${req.method} ${req.url}`);
    if (req.url === '/') {
        const items = getItems();
        const props = {items: items};
        const reactHtml = ReactDOMServer.renderToString(NewApp(props));
        const pageHtml = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3qoEAd6r/AHeqgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3qoEAd6r/AHeqgQAAAAAAAAAAAAAAAAAAAAAAeaz/AMz//wCj1v8Aeaz/AHmsQAAAAAAAAAAAAHmsQAB5rP8Ao9b/AMz//wB5rP8AAAAAAAAAAAAAAAAAAAAAAHyv/wi66/8Lz///CLrr/wB8r/8AfK+/AHyvvwB8r/8Iuuv/C8///wi66/8AfK//AAAAAAAAAAAAAAAAAAAAAAB/soEOqdn/G9L//xvS//8b0v//FL3s/xS97P8b0v//G9L//xvS//8Oqdn/AH+ygQAAAAAAAAAAAAAAAAAAAAAAgrVAAIK1/y3W//8t1v//Ldb//y3W//8t1v//Ldb//y3W//8t1v//AIK1/wCCtUAAAAAAAAAAAAAAAAAAAAAAAAAAAACGuf8xxu3/Qdv//0Hb//9B2///Qdv//0Hb//9B2///Mcbt/wCGuf8AAAAAAAAAAAAAAAAAAAAAAAAAAACKvUAAir3/Qsru/1jg//9Y4P//WOD//1jg//9Y4P//WOD//0LK7v8Air3/AIq9QAAAAAAAAAAAAAAAAACOwUAAjsH/U8/v/2/l//9v5f//b+X//2/l//9v5f//b+X//2/l//9v5f//U8/v/wCOwf8AjsFAAAAAAACTxoEAk8b/ZNXx/4Xr//+F6///hev//4Xr//+F6///hev//4Xr//+F6///hev//4Xr//9k1fH/AJPG/wCTxoEAl8r/3f///734//+c8P//nPD//5zw//+c8P//nPD//5zw//+c8P//nPD//5zw//+c8P//vfj//93///8Al8r/AJvOgQCbzv8Am87/AJvO/wCbzv9YyOf/sPX//7D1//+w9f//sPX//1jI5/8Am87/AJvO/wCbzv8Am87/AJvOgQAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/S/8L5///C+f//wvn//8L5//8An9L/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACi1YFpz+r/0vz//9L8//9pz+r/AKLVgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKXY/93////d////AKXY/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo24Fv1O3/b9Tt/wCo24EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKrd/wCq3f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx+MAAMPDAADAAwAAwAMAAOAHAADgBwAA4AcAAMADAAAAAAAAAAAAAAAAAAD4HwAA+B8AAPw/AAD8PwAA/n8AAA==" rel="icon" type="image/x-icon" />
                <title>React Example</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <div id="content">${reactHtml}</div>
                <script src="/react.js"></script>
                <script src="/react-dom.js"></script>
                <script src="/bundle.js"></script>
            </body>
        </html>`;
        res.setHeader('Content-Type', 'text/html');
        res.end(pageHtml)
    } else if (req.url === '/app-props.json') {
        const items = getItems();
        const props = {items: items};
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(props));
    } else if (req.url === '/react.js') {
        res.setHeader('Content-Type', 'text/javascript');
        fs.readFile(`./node_modules/react/dist/react${isProd ? '.min.js' : '.js'}`, (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === '/react-dom.js') {
        res.setHeader('Content-Type', 'text/javascript');
        fs.readFile(`./node_modules/react-dom/dist/react-dom${isProd ? '.min.js' : '.js'}`, (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === '/style.css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./src/style.css', (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else if (req.url === '/bundle.js') {
        res.setHeader('Content-Type', 'text/javascript');
        fs.readFile('./dist/browser.js', (err, data) => {
            if (err) { console.error(err); }
            res.end(data);
        });
    } else {
        res.statusCode = 404
        res.end()
    }

}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
});