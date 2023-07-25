import { ReactNode } from 'react'

export type GetProductClientProps = {
  nextPurchase: ReactNode
  lastPurchase: ReactNode
  classificacao: string
  quantidade: number
  id: number
  nome: string
  percentual: number
}[]
