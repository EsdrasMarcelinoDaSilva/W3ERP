import { ReactNode } from 'react'

export type Product = {
  lastPurchase: ReactNode
  nextPurchase: ReactNode
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
  id: number
  nome: string
  percentual: number
  quantidade: number
}

export type GetProductsResponse = {
  content: Product[]
}
