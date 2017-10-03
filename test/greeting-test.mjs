/* eslint-env mocha */

import assert from 'assert'
import { generateGreeting } from '../src/api'

describe('generateGreeting', () => {
  it('should throw an error when no argument is supplied', () => {
    assert.throws(() => {
      generateGreeting()
    }, Error)
  })
  it('should resolve to a greeting longer than input')
  it('should resolve to a greeting containing input')
})
