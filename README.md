# react-server-example-tsx

[![npm](https://img.shields.io/npm/v/react-server-example-tsx.svg?maxAge=86400)](https://www.npmjs.com/package/react-server-example-tsx)
[![Downloads](https://img.shields.io/npm/dt/react-server-example-tsx.svg)](https://www.npmjs.com/package/react-server-example-tsx)
[![Dependency Status](https://david-dm.org/styfle/react-server-example-tsx.svg)](https://david-dm.org/styfle/react-server-example-tsx)
[![devDependency Status](https://david-dm.org/styfle/react-server-example-tsx/dev-status.svg)](https://david-dm.org/styfle/react-server-example-tsx#info=devDependencies)
[![Build Status](https://travis-ci.org/styfle/react-server-example-tsx.svg?branch=master)](https://travis-ci.org/styfle/react-server-example-tsx)

A complex example of how to do server-side rendering with
[React](http://facebook.github.io/react/) and [TypeScript](https://www.typescriptlang.org/) so that component code can be shared between server and browser (also known as isomorphic javascript).

Server-Side Rendering (SSR) leads to fast initial page loads, search-engine-friendly pages, and of course...its all type safe!


## Getting Started

Clone the repo, change directory, install dependencies, build the code, and run it!

```sh
git clone https://github.com/styfle/react-server-example-tsx.git
cd react-server-example-tsx
npm install
npm run build
npm run test
npm start
```

Then navigate to http://localhost:3007 and click on the buttons to see some reactive events in action.

## Deployment


<a href="https://www.heroku.com/deploy/?template=https://github.com/styfle/react-server-example-tsx"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" height="25px"></a>

<a href="https://deploy.now.sh/?repo=https://github.com/styfle/react-server-example-tsx"><img src="https://deploy.now.sh/static/button.svg" alt="Deploy to Now" height="25px"></a>

Don't forget to set the environment variable `NODE_ENV=production` to avoid the slower, dev version of React. Like so:

```sh
npx now -e NODE_ENV=production styfle/react-server-example-tsx
```

## Preventing XSS

The original code from `mhart` attempts to [sanitize the props](https://github.com/mhart/react-server-example/blob/feada6183fe2fbb1a746492e157febe49eeafdcd/server.js#L106) by escaping and then inserting into a `<script>` tag.

I avoided this by performing *1 extra http request* to fetch the props as json before initializing React in the browser. This means that click handlers will not be initialized until the data is returned and React can pick up where it left off after the server-side render and attach the click even handlers. This is the purpose of `ReactDOM.hydrate`.

See [browser.tsx](https://github.com/styfle/react-server-example-tsx/blob/master/src/browser.tsx) for the client-side code.

See [server.tsx](https://github.com/styfle/react-server-example-tsx/blob/master/src/server.tsx) for the server-side code.

## Prior art

Based on prior work found at [mhart/react-server-example](https://github.com/mhart/react-server-example). It's very good so you should check it out :)

Additionally, I use a combination between [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html#create-a-webpack-configuration-file) and [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader#configuration) when I switched from browserify v1.4.x to webpack v2.0.x (now webpack v3.x).

## Author

Developed by [ceriously.com](https://www.ceriously.com), the author of [Package Phobia](https://github.com/styfle/packagephobia)
