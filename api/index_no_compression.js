// express
import express from "express";

const app = express()
const port = 3001

const data = []
for (let i = 0; i < 1000000; i++) {
  data.push(i)
}

app.get('/', (req, res) => {
  const randomString = Math.random().toString(36).slice(-8)
  res.send({ c: data, randomString })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})