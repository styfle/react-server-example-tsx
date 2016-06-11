import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppComponent from './components/app';

fetch('/app-props.json')
    .then(o => o.json())
    .then((props: any) => {
        var NewApp = React.createFactory(AppComponent);
        var app = NewApp(props);
        ReactDOM.render(app, document.getElementById('content'));
    });
