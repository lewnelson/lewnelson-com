import * as routing from './routing'

test('getPath gets the path from a components routing props', () => {
  const path = '/path'
  const component = { routerProps: jest.fn().mockReturnValue({ path }) }
  expect(routing.getPath(component)).toEqual(path)
})
