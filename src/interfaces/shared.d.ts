interface AppProps {
    listItems: string[];
    menuItems: MenuItemProps[];
}

interface MenuItemProps {
    id: string;
    href: string;
    text: string;
}
