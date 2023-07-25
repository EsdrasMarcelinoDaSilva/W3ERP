import { ReactNode } from 'react'

export type GetProductProps = {
  content: {
    classificacao: 'EM_ALTA' | 'EM_BAIXA'
    id: number
    nome: string
    percentual: number
    quantidade: number
    nextPurchase: ReactNode
    lastPurchase: ReactNode
  }[]

  empty: true
  first: true
  last: true
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: number
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: number
  totalPages: number
}
