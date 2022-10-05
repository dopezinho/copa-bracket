import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.body = { ola: "Mundo" }
})

router.get('/users', async ctx => {
    ctx.body = { ola: "Users" }
})


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)