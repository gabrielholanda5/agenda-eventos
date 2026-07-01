import { prisma } from "../lib/prisma.js";

export class EventoService {

    async listar() {
        return await prisma.evento.findMany()
    }

    async criar(local: string, horario: string, diaDaSemana: string, blusa: string, bermuda: string, cache?: number) {
        return await prisma.evento.create({
            data: {
                local,
                horario,
                diaDaSemana,
                bermuda,
                blusa,
                cache
            }
        })
    }

    async atualizar(id: number, local?: string, horario?: string, diaDaSemana?: string, blusa?: string, bermuda?: string, cache?: number) {
        return await prisma.evento.update({
            where: {id},
            data: {
                local, 
                horario,
                diaDaSemana,
                blusa,
                bermuda,
                cache
            }
        })
    }

    async deletar(id:number) {
        return await prisma.evento.delete({
            where: {id}
        })
    }

}