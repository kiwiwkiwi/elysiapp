import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const app = new Elysia()

app.use(html());

app.get("/", () => (
  <html>
    <head>
      <title>Hello World</title>
    </head>
    <body>
      <form action="submit-form">
        <input/>
        <button>Submit</button>
      </form>
    </body>
  </html>
))

app.post('submit-form', async ({ body }) => {
  data: body
})
app.get('/nice', () => "hello")

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
