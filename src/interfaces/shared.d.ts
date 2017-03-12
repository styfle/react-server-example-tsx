interface AppProps {
    items: string[];
}

interface SubItemProps {
    href: string;
    text: string;
}

interface MenuItemProps extends SubItemProps {
    id: string;
    subitems?: SubItemProps[];
    onClick?: (id: string) => void;
    isVisible?: boolean;
}