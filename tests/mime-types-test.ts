import * as test from 'tape';
import { lookup } from '../src/mime-types';

test('lookup .js', t => {
    t.plan(1);
    const mime = lookup('file.js');
    t.equal(mime, 'application/javascript');
});

test('lookup .js.map', t => {
    t.plan(1);
    const mime = lookup('file.js.map');
    t.equal(mime, 'application/javascript');
});

test('lookup .json', t => {
    t.plan(1);
    const mime = lookup('file.json');
    t.equal(mime, 'application/json');
});

test('lookup .css', t => {
    t.plan(1);
    const mime = lookup('file.css');
    t.equal(mime, 'text/css');
});

test('lookup .html', t => {
    t.plan(1);
    const mime = lookup('file.html');
    t.equal(mime, 'text/html');
});

test('lookup .txt', t => {
    t.plan(1);
    const mime = lookup('/some/file.txt');
    t.equal(mime, 'text/plain');
});