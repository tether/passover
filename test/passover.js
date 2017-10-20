
/**
 * Test dependencies.
 */

const test = require('tape')
const passover = require('..')


test('should return a property', assert => {
  assert.plan(1)
  const property = passover({
    hello: 'world'
  })
  assert.equal(property('hello'), 'world')
})


test('should return null if property not found', assert => {
  assert.plan(1)
  const property = passover({
    hello: 'world'
  })
  assert.equal(property('super') == null, true)
})


test('should traverse recursively an object and return property', assert => {
  assert.plan(2)
  const property = passover({
    hello: 'world',
    user: {
      name: 'bob'
    }
  })
  assert.equal(property('user', 'name'), 'bob')
  assert.equal(property('user', 'age') == null, true)
})
