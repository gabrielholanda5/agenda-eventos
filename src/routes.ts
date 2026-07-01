import { Router } from 'express'
import { EventoController } from './controllers/evento.controller.js'

const eventoRoutes = Router()
const eventoController = new EventoController()

eventoRoutes.get("/", eventoController.listar)
eventoRoutes.post("/", eventoController.criar)
eventoRoutes.put("/:id", eventoController.atualizar)
eventoRoutes.delete("/:id", eventoController.deletar)

export { eventoRoutes }