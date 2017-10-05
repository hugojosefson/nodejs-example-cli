# Node.js example CLI app

[![Build Status](https://travis-ci.org/hugojosefson/nodejs-example-cli.svg?branch=master)](https://travis-ci.org/hugojosefson/nodejs-example-cli)
[![License ISC](https://img.shields.io/npm/l/@hugojosefson/example-cli.svg)](https://tldrlegal.com/license/isc-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](http://semver.org/spec/v2.0.0.html)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Waffle.io](https://img.shields.io/waffle/label/hugojosefson/nodejs-example-cli/inbox.svg)](https://waffle.io/hugojosefson/nodejs-example-cli)
[![Waffle.io](https://img.shields.io/waffle/label/hugojosefson/nodejs-example-cli/to%20do.svg)](https://waffle.io/hugojosefson/nodejs-example-cli)
[![Waffle.io](https://img.shields.io/waffle/label/hugojosefson/nodejs-example-cli/in%20progress.svg)](https://waffle.io/hugojosefson/nodejs-example-cli)
[![Waffle.io](https://img.shields.io/waffle/label/hugojosefson/nodejs-example-cli/done.svg)](https://waffle.io/hugojosefson/nodejs-example-cli)

## Introduction

This is a simple CLI app in Node.js, using ES Modules.

## Prerequisite

Node.js, at least `v4.0.0`.

Recommended to install latest via [nvm](https://github.com/creationix/nvm#readme):

```bash
nvm install stable
```

## Installation

```bash
npm install -g @hugojosefson/example-cli
```

## Usage

```bash
example-cli "Your Name"
```

Will say hello to you.

## Programmatic access

You can also `import` or `require` the module, and use its exported functions programmatically.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### generateGreeting

Generates a greeting

**Parameters**

-   `whom` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Whom to greet.

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** A Promise of a greeting.

#### identity

Returns the supplied argument.

**Parameters**

-   `a` **any** Any argument.

Returns **any** The argument a.
