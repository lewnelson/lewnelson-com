let ws
let connectInterval = null
let connectionAttemptCount = 0
function resetPollConnect () {
  clearInterval(connectInterval)
  connectInterval = null
  connectionAttemptCount = 0
}

function pollConnect () {
  if (connectInterval !== null) return
  connectInterval = setInterval(() => {
    if (ws && ws.readyState === 0) return
    if (connectionAttemptCount > 5) {
      console.log('Live reload server max reconnect count reached, to manually try to reconnect invoke `window._liveReloadConnect`', window._liveReloadConnect)
      return resetPollConnect()
    }
    console.log('attempting to connect to live reload server')
    connect()
    connectionAttemptCount++
  }, 3000)
}

function handleReload ({ eventType, filename }) {
  setTimeout(() => {
    window.location.reload()
  }, 1000)
}

function connect () {
  try {
    const uri = 'ws://localhost:8085/'
    ws = new WebSocket(uri)
    ws.addEventListener('open', () => {
      resetPollConnect()
      console.log(`Live reload connected to ${uri}`)
    })

    ws.addEventListener('close', () => {
      console.log('Live reload disconnected')
      ws = undefined
      pollConnect()
    })

    ws.addEventListener('message', ({ data }) => {
      try {
        data = JSON.parse(data)
        if (data.action === 'reload') handleReload(data.meta)
      } catch (err) {
        console.error('Unable to parse live reload data', data, err)
      }
    })
  } catch (err) {
    console.log('unable to connect to live reload server')
  }
}

pollConnect()
window._liveReloadConnect = pollConnect
export default () => {}
