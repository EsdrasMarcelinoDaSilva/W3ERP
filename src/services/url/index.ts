import axios from 'axios'

export const W3ApiPath = axios.create({
  baseURL: 'https://api.predict.app.br'
})
