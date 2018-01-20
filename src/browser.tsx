import * as React from 'react';
import { hydrate } from 'react-dom';
import App from './components/app';
import { propsUrl, containerId } from './constants';

fetch(propsUrl)
    .then(o => o.json())
    .then((props: AppProps) => {
        const app = <App {...props} />;
        const el = document.getElementById(containerId);
        hydrate(app, el);
    });
