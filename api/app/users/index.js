import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const create = async (ctx) => {
    const data = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
    }

    try {
        const user = await prisma.user.create({ data })
        ctx.body = user
        ctx.status = 201
    } catch (error) {
        ctx.body = error
        ctx.status = 500
    }
}

export const list = async ctx => {
    try {
        const users = await prisma.user.findMany()
        ctx.body = users
        ctx.status = 200
    } catch (error) {
        ctx.body = error
        ctx.status = 500
    }
}