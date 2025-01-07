import fastify from "fastify"
import cookie from "@fastify/cookie" 
import { env } from './env'
import { transactionsRoutes } from "./routes/transaction"

const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions'
})

app.listen({
  port: parseInt(env.PORT),
}).then(() => {
  console.log('HTTP Server Running!')
})
