import ReactDOM from 'react-dom'
require('./index')

test('it renders the app to the DOM', () => {
  expect(ReactDOM.render.mock.calls[0]).toMatchSnapshot()
})
