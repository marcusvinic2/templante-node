import { Router } from 'express'

const routes: Router = Router()

// PUBLIC ROUTER
routes.get('/', (req, res) => {
  return res.status(200).json({
    success: 'server on',
  })
})

export default routes
