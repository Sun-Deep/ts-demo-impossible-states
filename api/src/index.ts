import express from 'express'
import cors from 'cors'

import { sleep } from './util'

const app = express()
const port = 3000

app.use(cors())

app.set('etag', false)

app.get('/', (_req, res) => {
  res.set('Cache-Control', 'no-store')
  res.json({ status: 'OK' })
})

app.get('/data', async (_req, res) => {
  res.set('Cache-Control', 'no-store')

  // simulate slow response
  await sleep(2000)

  const isOk = Math.random() < 0.5

  if (isOk) {
    res.json({
      head: 'Hello World!',
      body:
        'Lorem ipsum dolor sit amet.. wait a minute, it was supposed to be Hello LeapTalk ..consectetur adipiscing elit et.',
    })

    return
  }

  res.status(400)

  res.json({
    code: 100,
    title: 'Something went wrong!',
    detail:
      'This is a simulated error based on pure luck, or rather lack of it.',
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
