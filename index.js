'use strict'

/**
 * Calls the given function with the minimist-parsed command line options and exit the process with the returned number of the main function.
 * @param {Function} main The main function of the cli
 * @param {number} sliceIndex The index of slicing the process.argv
 */
module.exports = (main, sliceIndex) => {
  sliceIndex = typeof sliceIndex === 'number' ? sliceIndex : 2

  const exitCode = main(require('minimist')(process.argv.slice(sliceIndex)))

  if (typeof exitCode === 'number') {
    process.exit(exitCode)
  }
}
