const WebSocket = require('ws')
const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')

const wss = new WebSocket.Server({ port: 8080 })
const connectedClients = {}

function send (msg, ws) {
  ws.send(typeof msg === 'string' ? msg : JSON.stringify(msg))
}

fs.watch(path.resolve(__dirname, 'public'), { recursive: true }, (eventType, filename) => {
  Object.values(connectedClients).forEach(ws => {
    send({ action: 'reload', meta: { eventType, filename } }, ws)
  })
})

wss.on('connection', ws => {
  console.log('client connected')
  ws.id = uuidv4()
  connectedClients[ws.id] = ws

  ws.on('close', () => {
    delete connectedClients[ws.id]
  })
})
