import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  console.log("Hello mdr")
  return c.text('Hello Ho yes!')
})


export default app
