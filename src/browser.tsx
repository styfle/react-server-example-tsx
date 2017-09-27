import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import { propsUrl, containerId } from './routes';

fetch(propsUrl)
    .then(o => o.json())
    .then((props: AppProps) => {
        const app = (<App {...props} />);
        const el = document.getElementById(containerId);
        ReactDOM.hydrate(app, el);
    });
