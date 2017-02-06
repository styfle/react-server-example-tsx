import * as React from 'react';

export default class MenuItem extends React.Component<MenuItemProps, {}> {
    constructor(props: MenuItemProps) {
        super(props);
    }
    handleClick = () => {
        const { onClick, id } = this.props;
        if (onClick) {
            onClick(id);
        }
    }
    render() {
        const { subitems, href, text, id, isVisible } = this.props;
        const style = {
            display: isVisible ? 'block' : 'none'
        };
        return (
            <li className="dropdown" onClick={this.handleClick}>
                <a id={this.props.id} role="button" data-toggle="dropdown" href={href}>{text}</a>
                <ul className="dropdown-menu" role="menu" aria-labelledby={id} style={style}>
                    {(subitems || []).map((o, i) => 
                        <li key={i}><a href={o.href}>{o.text}</a></li>
                    )}
                </ul>
            </li>
        );
    }
}