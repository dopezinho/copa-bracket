import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const list = async ctx => {
    try {
        const games = await prisma.game.findMany()
        ctx.body = games
        ctx.status = 200
    } catch (error) {
        ctx.body = error
        ctx.status = 500
    }
}