# Node.js example CLI app

[![Build Status](https://travis-ci.org/hugojosefson/nodejs-example-cli.svg?branch=master)](https://travis-ci.org/hugojosefson/nodejs-example-cli)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/example-cli.svg)](https://npmjs.com/package/@hugojosefson/example-cli)
[![License MIT](https://img.shields.io/npm/l/@hugojosefson/example-cli.svg)](https://tldrlegal.com/license/mit-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](https://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

This is a simple CLI app in Node.js, using ES Modules.

### Using as a template

_To use this project as a template for your own project, you can do this:_

```bash
mkdir my-cli
cd my-cli
git init
curl https://codeload.github.com/hugojosefson/nodejs-example-cli/tar.gz/master | tar xzv --strip-components=1
git add --all
git commit -m 'Add template files from nodejs-example-cli.'
yarn
```

_You may wish to make it more your own project:_

```bash
export GITHUB_REPO='xxxx/yyyy'   # replace with your project's github repo
export BIN_NAME='yyyy'           # replace with name of main binary
export NPM_NAME='@xxxx/yyyy'     # optional: your project's npm name

npx replace '"version": "[^"]+"'              '"version": "0.0.1"'       package.json
npx replace '"description": "[^"]+"'          '"description": ""'        package.json
npx replace '"author": "[^"]+"'               '"author": ""'             package.json
npx replace '@hugojosefson/example-cli'       "${NPM_NAME:-${BIN_NAME}}" . --recursive
npx replace 'hugojosefson/nodejs-example-cli' "${GITHUB_REPO}"           . --recursive
npx replace 'example-cli'                     "${BIN_NAME}"              . --recursive
npx replace '^#+ Using as [\S\s]+(## P(re)+)' '$1'                       README.md
npx replace '"keywords":[^\]]*\][^"]*'        ''                         package.json
rm CHANGELOG.md
yarn

git add --all
git commit -m "Rename project to ${NPM_NAME}."
```

_Then edit `package.json` and go on developing!_

## Prerequisite

Node.js, `v13.2.0` or higher, ideally at least `v14.0.0`.

Recommended to install latest via [nvm](https://github.com/nvm-sh/nvm#readme):

```bash
nvm install stable
```

## Usage

```bash
npx --package @hugojosefson/example-cli example-cli greet "Your Name"
```

Will say hello to you.

## Programmatic access

You can also `import` the module, and use its exported functions
programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### identity

Returns the supplied argument.

##### Parameters

- `a` **any** Any argument.

Returns **any** The argument a.

#### generateGreeting

Generates a greeting.

##### Parameters

- `options`
  **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**
  - `options.whom`
    **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
    Whom to greet.
  - `options.language`
    **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)**
    Optional. Language of greeting, `en` or `sv`. Default `en`.

Returns
**[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>**
A Promise of a greeting.
