# react-server-example-tsx

[![npm](https://img.shields.io/npm/v/react-server-example-tsx.svg?maxAge=2592000)](https://www.npmjs.com/package/react-server-example-tsx)
[![Downloads](https://img.shields.io/npm/dt/react-server-example-tsx.svg)](https://www.npmjs.com/package/react-server-example-tsx)
[![Dependency Status](https://david-dm.org/styfle/react-server-example-tsx.svg)](https://david-dm.org/styfle/react-server-example-tsx)
[![devDependency Status](https://david-dm.org/styfle/react-server-example-tsx/dev-status.svg)](https://david-dm.org/styfle/react-server-example-tsx#info=devDependencies)

A complex example of how to do server-side rendering with
[React](http://facebook.github.io/react/) and [TypeScript](https://www.typescriptlang.org/) so that component code can be shared between server and browser (also known as isomorphic javascript). SSR leads to fast initial page loads, search-engine-friendly pages, and of course...its all type safe!

## Prior art

Based on prior work found at [mhart/react-server-example](https://github.com/mhart/react-server-example). It's very good so you should check it out :)

Additionally, I use a combination between [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#create-a-webpack-configuration-file) and [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader#configuration) when I switched from browserify14 to webpack2.

## Getting Started

Install dependencies, build the code, test it, and run it!

```sh
npm install
npm run build
npm run test
npm start
```

Then navigate to http://localhost:3007 and click on the buttons to see some reactive events in action.

## Preventing XSS

In the example data, there is a xss attack that would normally break when attempting to generate html on the server. The original code from `mhart` attempts to sanitize the input with the following:

```js
function safeStringify(obj) {
	  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}
```

Instead of writing the data in a script tag, I opted for doing *1 extra http request* to fetch the data props as json before initializing react in the browser. Note that this means click handlers will not be initialized until the data is returned and React can pick up where it left off after the server-server render and attach the click even handlers.

See [browser.tsx](https://github.com/styfle/react-server-example-tsx/blob/master/src/browser.tsx) for the client-side code.

See [server.tsx](https://github.com/styfle/react-server-example-tsx/blob/master/src/server.tsx) for the server-side code.
