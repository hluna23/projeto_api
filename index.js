const expr = require("express")
const app = expr()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/contato', (req, res) => {
  res.send('Got a PUT request at /contato')
})

app.delete('/contato', (req, res) => {
  res.send('Got a DELETE request at /contato')
})

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`)
})