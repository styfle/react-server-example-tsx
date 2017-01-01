import * as React from 'react';

interface ButtonProps {
    className: 'gray-btn' | 'dark-gray-btn' | 'blue-btn' | 'gold-btn';
    value: string;
    disabled: boolean;
    onClick: (e: React.MouseEvent) => void;
}

export default class Button extends React.Component<ButtonProps, {}> {
  render() {
      var className = this.props.className || 'blue';
      var value = this.props.value || 'Do it';
      return (
        <button type="button"
                onClick={this.props.onClick}
                disabled={this.props.disabled || false}
                className={this.props.className || 'blue'}>
                {this.props.value || 'Do it'}
        </button>
    );
  }
}