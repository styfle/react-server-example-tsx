"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const app_1 = require("./components/app");
fetch('/app-props.json')
    .then(o => o.json())
    .then((props) => {
    var NewApp = React.createFactory(app_1.default);
    var app = NewApp(props);
    ReactDOM.render(app, document.getElementById('content'));
});
//# sourceMappingURL=browser.js.map