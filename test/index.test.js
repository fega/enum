/* eslint-env node, mocha */
const { assert: a } = require('chai');
const Enum = require('../')


suite('main')

test('normal use', () => {
  const HOMES = Enum('HOUSE', 'FLAT')

  a.equal(HOMES.HOUSE, 'HOUSE')
  a.equal(HOMES.FLAT, 'FLAT')
})

test('missing enum, it throws', () => {
  const HOMES = Enum('HOUSE', 'FLAT')

  a.throws(v => {
    HOMES.CAR
  })
})


test('set enum, it throws', () => {
  const HOMES = Enum('HOUSE', 'FLAT')

  a.throws(v => {
    HOMES.CAR = "hello"
  })
  a.throws(v => {
    HOMES.HELLO = "hello"
  })
})


test('enum keys()', () => {
  const HOMES = Enum('HOUSE', 'FLAT')

  a.deepEqual(Object.keys(HOMES), ['HOUSE', 'FLAT'])
})