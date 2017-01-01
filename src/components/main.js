"use strict";
const React = require("react");
class Main extends React.Component {
    render() {
        return (React.createElement("div", { className: "main", role: "main" }, this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
//# sourceMappingURL=main.js.map