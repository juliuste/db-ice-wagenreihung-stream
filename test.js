'use strict'

const tape = require('tape')
const wagenreihungStream = require('./index')
const nonEmptyStream = require('non-empty-stream')


tape('db-ice-wagenreihung-stream', (t) => {
	wagenreihungStream(new Date(), new Date())
	.pipe(nonEmptyStream())
	t.end()
	// todo
})
