import * as React from 'react';
import Menu from './menu';

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
            <header role="banner" className="clearfix">
            <div className="top-header">
                <a href="#">Logo</a>
            </div>
        
            <nav id="navigation" className="closed clearfix">
                <Menu />
            </nav>
        <button className="nav-toggle" id="nav-toggle">Menu</button>
    </header>
        )
    }
}