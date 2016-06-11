import * as React from 'react';

export default class Main extends React.Component<{}, {}> {
  render() {
      return (
        <div className="main" role="main">{this.props.children}</div>
    );
  }
}