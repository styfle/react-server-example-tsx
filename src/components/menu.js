"use strict";
const React = require("react");
const menu_item_1 = require("./menu-item");
const data = [
    {
        id: 'dashboards',
        href: '#dashboards',
        text: 'Dashboard'
    },
    {
        id: "workflow-dropdown",
        href: "#workflow",
        text: "Workflow",
        subitems: [
            { text: "Workflow Home", href: "workflow.html" },
            { text: "Open Items", href: "#" },
            { text: "History", href: "history.html" },
            { text: "Receive Invoices", href: "#" },
            { text: "Receive Packing List", href: "#" },
        ]
    },
    {
        id: 'reports',
        href: '#reports',
        text: 'Reports'
    },
    {
        id: "shop-dropdown",
        href: "#shop",
        text: "Shop",
        subitems: [
            { text: "Shop Home", href: "shop.html" },
            { text: "Suppliers", href: "suppliers.html" },
            { text: "Catalogs", href: "catalogs.html" },
            { text: "Shopping List", href: "shopping-lists.html" },
            { text: "Shop By Item Number", href: "shop-by-number.html" },
        ]
    }
];
class Menu extends React.Component {
    constructor() {
        super();
        this.handleClick = (clickedId) => {
            console.log('clicked menu item', clickedId);
            let { isVisible } = this.state;
            data.forEach(o => {
                isVisible[o.id] = (clickedId === o.id) ? !isVisible[o.id] : false;
            });
            this.setState({ isVisible: isVisible });
        };
        this.state = { isVisible: {} };
    }
    render() {
        const { isVisible } = this.state;
        return (React.createElement("ul", { role: "navigation", className: "clearfix" }, data.map((o, i) => React.createElement(menu_item_1.default, { key: o.id, id: o.id, text: o.text, href: o.href, subitems: o.subitems, onClick: this.handleClick, isVisible: isVisible[o.id] }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Menu;
//# sourceMappingURL=menu.js.map