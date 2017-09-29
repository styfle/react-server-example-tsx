import * as React from 'react';

import Header from './header';
import Button from './button';
import Main from './main';

interface AppState {
    items: string[],
    disabled: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        // We initialise its state by using the `props` that were passed in when it
        // was first rendered. We also want the button to be disabled until the
        // component has fully mounted on the DOM
        this.state = {items: this.props.items, disabled: true};
    }

    // Once the component has been mounted, we can enable the button
    componentDidMount() {
        this.setState({disabled: false});
    }

    // Update the state whenever its clicked by adding a new item to
    // the list - imagine this being updated with the results of AJAX calls, etc
    handleAdd = () => {
        this.setState({
            items: this.state.items.concat('Item #' + this.state.items.length)
        });
    }
    
    handleSort = () => {
        this.setState({
            items: this.state.items.sort()
        });
    }
    
    render() {
        const { items } = this.state;

        return (<div className="container">
            <Header/>
            <Main>
                <ul>
                    {items.map((item, i) =>
                        <li key={i}>{item}</li>
                    )}
                </ul>
                <Button
                    onClick={this.handleAdd}
                    disabled={this.state.disabled}
                    type="primary"
                    value="Add Item" />
                <br/>
                <Button
                    onClick={this.handleSort}
                    disabled={this.state.disabled}
                    type="warning"
                    value="Sort Items" />
            </Main>
        </div>);
    }
}