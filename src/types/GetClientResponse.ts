import { ReactNode } from 'react'

export type Client = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
  id: number
  nome: string
  percentual: number
  quantidade: number
  nextPurchase: ReactNode
  lastPurchase: ReactNode
}

export type GetClientResponse = {
  content: Client[]
}
