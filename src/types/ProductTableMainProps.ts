import { Product } from './GetProductsResponse'

type SetClassificationFn = (
  classification: 'EM_ALTA' | 'EM_BAIXA' | null
) => void

export type ProductTableMainProps = {
  filteredProducts: Product[]
  setProductClassification: SetClassificationFn
  productColumns: string[]
  tableTitle?: string
  titleColor?: string
  showButtons?: boolean
  tableTitleIcon?: React.ReactNode
  tableTitleIconBackgroundColor?: string
  showPercentColumn?: boolean
  showArrowIcon?: boolean
  showQuantityColumn?: boolean
  showLastPurchase?: boolean
  showNextPurchase?: boolean
  showDarBaixaColumn?: boolean
}
