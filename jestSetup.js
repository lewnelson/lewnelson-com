const mockedDate = new Date('2018-01-01T12:13:14')
const _Date = Date
global.Date = jest.fn(() => mockedDate)
global.Date.UTC = _Date.UTC
global.Date.parse = _Date.parse
global.Date.now = _Date.now
global.WebSocket = jest.fn(() => ({ addEventListener: jest.fn() }))
global.FileReader = jest.fn(() => ({ addEventListener: jest.fn(), readAsText: jest.fn() }))
global.document.getElementById = jest.fn(id => id)
