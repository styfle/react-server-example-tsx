import * as React from 'react';

interface ButtonProps {
    className: 'gray-btn' | 'dark-gray-btn' | 'blue-btn' | 'gold-btn';
    value: string;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class Button extends React.Component<ButtonProps, {}> {
  render() {
      const { className, value, disabled, onClick } = this.props;
      return (
        <button type="button"
                onClick={onClick}
                disabled={disabled || false}
                className={className || 'blue'}>
                {value || 'Do it'}
        </button>
    );
  }
}