import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Ho yes!')
})

app.get('/couille', (c) => c.text('GET TA COUILLE MDRRR'))

export default app
