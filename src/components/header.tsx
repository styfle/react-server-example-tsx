import * as React from 'react';

interface Props {
    title: string;
    sub: string;
}

export default function Header(props: Props) {
    const { title, sub } = props;
    return (
        <header role="banner">
            <h1>{title}</h1>
            <p>{sub}</p>
        </header>
    );
}
