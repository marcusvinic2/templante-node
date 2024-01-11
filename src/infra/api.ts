import axios from 'axios'
import Credentials from '../config/config'

export const ApiLocal = axios.create({
  baseURL: 'https://apiteste.nwsys.com.br',
})

Api.interceptors.request.use(async (config) => {
  config.headers['Client-Token'] = Credentials.API_KEY
  return config
})
