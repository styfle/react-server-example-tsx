import * as React from 'react';

export default function Main(props: { children: React.ReactNode[] }) {
    const { children } = props;
    return (
        <div role="main">{children}</div>
    );
}