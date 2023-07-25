export type GetPreditionCard = {
  content: {
    id: number
    nome: string
    title: string
    telefone: string | null
    email: string | null
    whatsapp: string | null
    classificacao: string
    percentual: number
    produtos: ProdutosProsps[]
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
type ProdutosProsps = {
  id: number
  proximaCompra: string
  nome: string
}
