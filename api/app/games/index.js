import { PrismaClient } from '@prisma/client'
import { addDays, formatISO } from 'date-fns'
const prisma = new PrismaClient()


export const list = async ctx => {
    const currentDate = ctx.request.query.gameTime
    try {
        const games = await prisma.game.findMany({
            where: {
                gameTime: {
                    gte: currentDate,
                    lt: addDays(new Date(currentDate), 1)
                }
            }
        })
        ctx.body = games
        ctx.status = 200
    } catch (error) {
        ctx.body = error
        ctx.status = 500
    }
}