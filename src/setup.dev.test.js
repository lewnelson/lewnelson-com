test('it sets __DEV__ to true', () => {
  const originalDev = global.__DEV__
  global.__DEV__ = false
  require('./setup.dev')
  expect(global.__DEV__).toBe(true)
  global.__DEV__ = originalDev
})
