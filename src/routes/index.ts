// src/routes/index.ts
import { Hono } from 'hono'
import * as controllers from '../controller'

const router = new Hono()

router.get('/health', controllers.healthController)
router.post('/verify', controllers.verificationController)


export default router
