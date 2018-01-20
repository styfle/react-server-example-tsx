import * as React from 'react';
import MenuItem from './menu-item';

interface Props {
    items: MenuItemProps[];
}

export default function Menu(props: Props) {
    const { items } = props;
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav">
                    {items.map((o, i) => (
                        <MenuItem key={o.id} id={o.id} text={o.text} href={o.href} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
