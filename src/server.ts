import express from 'express'
import cors from "cors"
import { eventoRoutes } from '../src/routes.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use("/eventos", eventoRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando lindamente em http://localhost:${PORT}`)
})