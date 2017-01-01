# react-server-example-tsx

[![npm](https://img.shields.io/npm/v/react-server-example-tsx.svg?maxAge=2592000)]()
[![Dependency Status](https://david-dm.org/styfle/react-server-example-tsx.svg)](https://david-dm.org/styfle/react-server-example-tsx)
[![devDependency Status](https://david-dm.org/styfle/react-server-example-tsx/dev-status.svg)](https://david-dm.org/styfle/react-server-example-tsx#info=devDependencies)

A complex example of how to do server-side rendering with
[React](http://facebook.github.io/react/) and [TypeScript](http://microsoft.github.io/typescript/) so that component code can be
shared between server and browser, fast initial page loads, search-engine-friendly pages, and of course...type safe!

## Prior art

Based on prior work found at [mhart/react-server-example](https://github.com/mhart/react-server-example). It's very good so you should check it out :)

## Getting Started

Install dependencies, build the code, and run it!

```sh
npm install
npm run build
npm start
```

Then navigate to http://localhost:3007 and click on the buttons to see some reactive events in action.

## Preventing xss

In the example data, there is a xss attack that would normally break when attempting to generate html on the server. The original code from mhart attempts to sanitize the input with the following:

```js
function safeStringify(obj) {
	  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
```

Instead of writing the data in a script tag, I opted for doing 1 extra http request to fetch the data props as json before initializing react in the browser. Note that this means click handlers will not be initialized until the data is returned and react can pick up where it left off after the server render. Ideally this data could be cached so it shouldn't be too slow and the user will not notice any wait.
