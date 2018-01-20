import { getListItems, getMenuItems } from './db';

export function fetchProps(): AppProps {
    return { listItems: getListItems(), menuItems: getMenuItems() };
}
