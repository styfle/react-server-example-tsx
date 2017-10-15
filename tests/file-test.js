const test = require('tape');
const { readFileAsync } = require('../src/file');

test('fetchProps', async t => {
    t.plan(3);
    const json = await readFileAsync('../package.json');
    const package = JSON.parse(json);
    t.true(!!package);
    t.equal(package.name, 'react-server-example-tsx');
    t.equal(props.repository, 'styfle/react-server-example-tsx');
});
