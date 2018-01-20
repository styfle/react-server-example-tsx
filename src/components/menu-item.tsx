import * as React from 'react';

export default function MenuItem(props: MenuItemProps) {
    const { id, href, text } = props;
    return (
        <li>
            <a id={id} href={href}>
                {text}
            </a>
        </li>
    );
}
