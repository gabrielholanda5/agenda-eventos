import { Request, Response } from "express"
import { EventoService } from "../services/evento.service.js"

const eventoService = new EventoService()

export class EventoController {

    async listar(req: Request, res: Response) {
        try {
            
            const eventos = await eventoService.listar()
            
            return res.json(eventos)
        } catch (error) {
            return res.status(500).json({error: "Erro ao buscas os eventos"})
        }
    }

    async criar(req: Request, res: Response) {
        try {
          
            const { local, horario, diaDaSemana, blusa, bermuda, cache } = req.body

            const novoEvento = await eventoService.criar(local, horario, diaDaSemana, blusa, bermuda, cache ? Number(cache): undefined)

            return res.status(201).json(novoEvento)
        } catch(error) {
            return res.status(500).json({ error: "Erro ao salvar um novo evento." })
        }
    }

    async atualizar(req: Request, res: Response) {
        try {

            const { id } = req.params
            const { local, horario, diaDaSemana, blusa, bermuda, cache } = req.body

            const eventoAtualizado = await eventoService.atualizar(Number(id),local, horario, diaDaSemana, blusa, bermuda, cache ? Number(cache): undefined)
            return res.json(eventoAtualizado)
        } catch (error: any) {
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Evento nao encontrado.' })
            }
            return res.status(500).json({ error: 'Erro ao atualizar evento.' }) 
        }
    }

    async deletar(req: Request, res: Response) {
        try{
            const { id } = req.params

            await eventoService.deletar(Number(id))
            return res.status(204).send()
        } catch (error: any) {
            if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Evento nao encontrado.' })
            }
            return res.status(500).json({ error: 'Erro ao deletar evento.' })
        }
    } 

}