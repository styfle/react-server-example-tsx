import * as React from 'react';

export default class MenuItem extends React.Component<MenuItemProps, {}> {
    constructor(props: MenuItemProps) {
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
        return (
            <li className="dropdown" onClick={this.handleClick}>
                <a id={this.props.id} role="button" data-toggle="dropdown" href={this.props.href}>{this.props.text}</a>
                <ul className="dropdown-menu" role="menu" aria-labelledby={this.props.id} style={style}>
                    {subitems.map((o, i) => 
                        <li key={i}><a href={o.href}>{o.text}</a></li>
                    )}
                </ul>
            </li>
        );
    }
}