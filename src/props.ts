import { getListItems, getMenuItems } from './db';

export function fetchProps() {
    const props: AppProps = { listItems: getListItems(), menuItems: getMenuItems() };
    return props;
}