import { GetProductClientProps } from './GetProductClientProps'

export type TableRow = {
  quantidade: number
  classificacao: string
  id: number
  nome: string
  percentual: number
  status?: string
}

export type TableBodyProps = {
  data: GetProductClientProps | null
  columns: string[]
  productClassName: string
  showStatusColumn?: boolean
  showArrowIcon?: boolean
  showQuantityColumn?: boolean
  showLastPurchase?: boolean
  showNextPurchase?: boolean
}
