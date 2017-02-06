"use strict";
const React = require("react");
class Button extends React.Component {
    render() {
        const { className, value, disabled, onClick } = this.props;
        return (React.createElement("button", { type: "button", onClick: onClick, disabled: disabled || false, className: className || 'blue' }, value || 'Do it'));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map