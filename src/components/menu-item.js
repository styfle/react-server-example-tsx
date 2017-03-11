"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            const { onClick, id } = this.props;
            if (onClick) {
                onClick(id);
            }
        };
    }
    render() {
        const { subitems, href, text, id, isVisible } = this.props;
        const style = {
            display: isVisible ? 'block' : 'none'
        };
        return (React.createElement("li", { className: "dropdown", onClick: this.handleClick },
            React.createElement("a", { id: this.props.id, role: "button", "data-toggle": "dropdown", href: href }, text),
            React.createElement("ul", { className: "dropdown-menu", role: "menu", "aria-labelledby": id, style: style }, (subitems || []).map((o, i) => React.createElement("li", { key: i },
                React.createElement("a", { href: o.href }, o.text))))));
    }
}
exports.default = MenuItem;
//# sourceMappingURL=menu-item.js.map