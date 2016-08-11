'use strict'

const assert = require('assert')

require('./')(argv => {
  assert(argv.foo === true)
  assert(argv.bar === 'baz')

  console.log('test ok!')
})
