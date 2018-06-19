# db-ice-wagenreihung-stream

Stream of [DB](https://www.bahn.de) ICE trains and their carriage order for a given time interval.

[![npm version](https://img.shields.io/npm/v/db-ice-wagenreihung-stream.svg)](https://www.npmjs.com/package/db-ice-wagenreihung-stream)
[![Build Status](https://travis-ci.org/juliuste/db-ice-wagenreihung-stream.svg?branch=master)](https://travis-ci.org/juliuste/db-ice-wagenreihung-stream)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/db-ice-wagenreihung-stream.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/db-ice-wagenreihung-stream.svg)](https://david-dm.org/juliuste/db-ice-wagenreihung-stream)
[![license](https://img.shields.io/github/license/juliuste/db-ice-wagenreihung-stream.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install --save db-ice-wagenreihung-stream
```

## Usage

```js
const wagenreihung = require('db-ice-wagenreihung-stream')

wagenreihung(start, end, opt) // forwarded to `db-train-numbers`
```

Returns a Stream that emits Objects returned by [`db-wagenreihung`](https://github.com/juliuste/db-wagenreihung).

Emits the `hidden-error` event for API errors.

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/db-ice-wagenreihung-stream/issues).
