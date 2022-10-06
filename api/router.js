import Router from '@koa/router'
import * as users from './app/users/index.js'

export const router = new Router()

router.get('/users', users.list)
router.post('/users', users.create)