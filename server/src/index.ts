import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  console.log("Hello mdr")
  return c.text('Hello Ho yes!')
})
app.get('/toast', (c) => {
  console.log("Toasted")
  return c.text('hon!')
})

app.get('/api', (c) => {
  return c.json({ message: 'Hello!' })
})

export default app
