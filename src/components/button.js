"use strict";
const React = require('react');
class Button extends React.Component {
    render() {
        var className = this.props.className || 'blue';
        var value = this.props.value || 'Do it';
        return (React.createElement("button", {type: "button", onClick: this.props.onClick, disabled: this.props.disabled || false, className: this.props.className || 'blue'}, this.props.value || 'Do it'));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=button.js.map