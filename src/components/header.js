"use strict";
const React = require('react');
const menu_1 = require('./menu');
class Header extends React.Component {
    render() {
        return (React.createElement("header", {role: "banner", className: "clearfix"}, React.createElement("div", {className: "top-header"}, React.createElement("a", {href: "#"}, "Logo")), React.createElement("nav", {id: "navigation", className: "closed clearfix"}, React.createElement(menu_1.default, null)), React.createElement("button", {className: "nav-toggle", id: "nav-toggle"}, "Menu")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
//# sourceMappingURL=header.js.map