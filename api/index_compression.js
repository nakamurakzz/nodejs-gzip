// express
import express from "express";
import compression from "compression";

const app = express()
app.use(compression({
  level: 9
}))
const port = 3000

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