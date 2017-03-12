import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './components/app';
import * as routes from './routes';

fetch(routes.props)
    .then(o => o.json())
    .then((data: any) => {
        const props = data as AppProps;
        const NewApp = React.createFactory(AppComponent);
        const app = NewApp(props);
        const el = document.getElementById(routes.containerId);
        ReactDOM.render(app, el);
    });
