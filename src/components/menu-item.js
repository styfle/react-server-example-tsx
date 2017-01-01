"use strict";
const React = require("react");
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.id);
    }
    render() {
        var subitems = this.props.subitems || [];
        var style = {
            display: this.props.isVisible ? 'block' : 'none'
        };
        return (React.createElement("li", { className: "dropdown", onClick: this.handleClick },
            React.createElement("a", { id: this.props.id, role: "button", "data-toggle": "dropdown", href: this.props.href }, this.props.text),
            React.createElement("ul", { className: "dropdown-menu", role: "menu", "aria-labelledby": this.props.id, style: style }, subitems.map((o, i) => React.createElement("li", { key: i },
                React.createElement("a", { href: o.href }, o.text))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuItem;
//# sourceMappingURL=menu-item.js.map