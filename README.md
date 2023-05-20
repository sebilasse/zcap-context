# Authorization Capabilities (zCap) Context Repository _(@digitalbazaar/zcap-context)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/zcap-context/main.yml)](https://github.com/digitalbazaar/zcap-context/actions/workflow/main.yml)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/zcap-context.svg)](https://npm.im/@digitalbazaar/zcap-context)

> An Authorization Capability (zCap) JSON-LD context for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Authorization Capabilities for Linked Data v0.3](https://w3c-ccg.github.io/zcap-spec/)

## Install

Requires Node.js 12+

To install via NPM:

```
npm install @digitalbazaar/zcap-context
```

## Usage

```js
const zcap = require('@digitalbazaar/zcap-context');

zcap.CONTEXT_URL
// 'https://w3id.org/zcap/v1'

// Codec term map value for CBOR-LD
zcap.constants.CBORLD_VALUE
// 0x1A

// get context data for a specific context
zcap.CONTEXT
// full context object
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`
- `CONTEXT`
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps URLs to full context data.
- `appContextMap`: For use with `cborld` library.

## Developing

WARNING: The `.jsonld` in `contexts/` is auto-generated by the `npm run build` script,
each time you run the test suite.

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[webpack]: https://webpack.js.org/
