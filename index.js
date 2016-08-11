'use strict'

/**
 * Calls the given function with the minimist-parsed command line options.
 * @param {Function} main The main function of the cli
 */
module.exports = main => main(require('minimist')(process.argv.slice(2)))
