/* eslint-disable no-unused-vars */
export type ResponseProps = {
  message: string
  status: number
}

declare global {
  namespace Express {
    interface Request {
      userId?: string
      userName?: string
    }
  }
}
