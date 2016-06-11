import * as React from 'react';
import MenuItem from './menu-item';

const data: MenuItemProps[] = [
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

interface MenuState {
    isVisible: {[id: string]: boolean};
}

export default class Menu extends React.Component<{}, MenuState> {
    constructor() {
        super();
        this.state = {isVisible: {}};
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(clickedId: string) {
        console.log('clicked menu item', clickedId);
        let isVisible = this.state.isVisible;
        
        data.forEach(o => {
            isVisible[o.id] = (clickedId === o.id) ? !isVisible[o.id] : false;
        });
        
        this.setState({isVisible: isVisible});
    }

    render() {
        return (
            <ul role="navigation" className="clearfix">
            {data.map( (o,i) => 
                <MenuItem key={i} id={o.id} text={o.text} href={o.href} subitems={o.subitems} onClick={this.handleClick} isVisible={this.state.isVisible[o.id]} /> 
            )}
            </ul>
        );
    }
}
