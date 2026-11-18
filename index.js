const express = require('express')
const app = express()
app.use(require('cors')())
app.use(express.json())

let forms = []

app.post('/forms', (req, res) => {
  const { title, questions } = req.body
  const form = { id: Date.now(), title, questions }
  forms.push(form)
  res.json(form)
})

app.listen(3001, () => console.log('http://localhost:3001'))