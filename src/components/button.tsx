import * as React from 'react';

interface ButtonProps {
    type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
    value: string;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button (props: ButtonProps) {
    const { type, value, disabled, onClick } = props;

    return (<button type="button"
        onClick={onClick}
        disabled={disabled || false}
        className={'btn btn-' + type}>
        {value}
    </button>);
}