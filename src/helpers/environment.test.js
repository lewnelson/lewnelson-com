import * as environment from './environment'

describe('isDev', () => {
  let originalDev
  beforeEach(() => {
    originalDev = global.__DEV__
  })

  afterEach(() => {
    global.__DEV__ = originalDev
  })

  test('when __DEV__ is true it returns true', () => {
    global.__DEV__ = true
    expect(environment.isDev()).toBe(true)
  })

  test('when __DEV__ is falsey it returns false', () => {
    global.__DEV__ = undefined
    expect(environment.isDev()).toBe(false)
  })
})
