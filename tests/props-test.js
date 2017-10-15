const test = require('tape');
const { fetchProps } = require('../src/props');

test('fetchProps', t => {
    t.plan(5);
    const props = fetchProps();
    t.true(!!props);
    t.true(!!props.listItems);
    t.true(!!props.menuItems);
    t.equal(props.listItems.length, 5);
    t.equal(props.menuItems.length, 5);
});
