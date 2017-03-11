"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const header_1 = require("./header");
const button_1 = require("./button");
const main_1 = require("./main");
class App extends React.Component {
    constructor(props) {
        super(props);
        // Update the state whenever its clicked by adding a new item to
        // the list - imagine this being updated with the results of AJAX calls, etc
        this.handleAdd = () => {
            this.setState({
                items: this.state.items.concat('Item #' + this.state.items.length)
            });
        };
        this.handleSort = () => {
            this.setState({
                items: this.state.items.sort()
            });
        };
        // We initialise its state by using the `props` that were passed in when it
        // was first rendered. We also want the button to be disabled until the
        // component has fully mounted on the DOM
        this.state = { items: this.props.items, disabled: true };
    }
    // Once the component has been mounted, we can enable the button
    componentDidMount() {
        this.setState({ disabled: false });
    }
    render() {
        var listuff = this.state.items.map((item, i) => React.createElement("li", { key: i }, item));
        return (React.createElement("div", { id: "app" },
            React.createElement(header_1.default, null),
            React.createElement(main_1.default, null,
                React.createElement("h1", null, "Hello world"),
                React.createElement("ul", null, listuff),
                React.createElement(button_1.default, { onClick: this.handleAdd, disabled: this.state.disabled, className: "blue-btn", value: "Add Item Button" }),
                React.createElement(button_1.default, { onClick: this.handleSort, disabled: this.state.disabled, className: "gold-btn", value: "Sort Items" }))));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map