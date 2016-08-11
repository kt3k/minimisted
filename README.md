# minimisted v1.0.2

[![Circle CI](https://circleci.com/gh/kt3k/minimisted.svg?style=svg)](https://circleci.com/gh/kt3k/minimisted)
[![codecov](https://codecov.io/gh/kt3k/minimisted/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/minimisted)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> Handy wrapper of `minimist`

`minimist` is a nice handy library for parsing the command line options, but its interface is not such nice and a bit too tedious if you use it a number of times. This library gives you an interface to use `minimist` a bit more declarative way.

# Install

    npm install minimisted

# Usage

You can write your cli like the following:

```js
// Your cli's entry point
const main = (argv) => {
}

require('minimisted')(main)
```

where `argv` is the parsed command line options by `minimist`, which is exactly the same as `minimist(process.argv.slice(2))`.

Using object destructuring syntax, you can write it like the following:

```js
/**
 * @param {boolean} help Shows help message if true
 * @param {boolean} version Shows the version if true
 * ...
 * @param {string[]} _ The parameters
 */
const main = ({help, version, _}) => {
}

require('minimisted')(main)
```

You can forget about what `minimist` does and you can only get what you want i.e. the parsed `argv` object.

# Exit code

If your main function returns a number other than 0, it is used as the return code of the cli.

`sample-cli.js`

```js
const main = ({foo}) => {
  if (foo) {
    return 1
  }
}

requrie('minimisted')(main)
```

With the above example, `node sample-cli.js` exits with 0, which means the success, and`node sample.js --foo` exits with 1, which means the failure.

# License

MIT
