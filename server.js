const path = require('path')
const compression = require('compression')
const express = require('express')
const app = express()

const port = 4000
app.use(compression())
app.use(express.static('public'))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')))
app.listen(port, () => console.log(`Server listening on port ${port}`))
