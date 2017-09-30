import * as React from 'react';

interface ButtonProps {
    type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
    text: string;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button (props: ButtonProps) {
    const { type, text, disabled, onClick } = props;

    return (<button type="button"
        onClick={onClick}
        disabled={disabled || false}
        className={'btn btn-' + type}>
        {text}
    </button>);
}