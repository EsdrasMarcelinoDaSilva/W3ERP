export type GetPreditionHistoricProps = {
  content: {
    percentual: any
    classificacao: any
    id: number
    nome: string
    quantidade: number
    ultimaCompra: string
    proximaCompra?: string | null
  }[]
}
