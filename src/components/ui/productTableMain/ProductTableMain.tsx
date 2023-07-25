import { RiShoppingBasketLine } from 'react-icons/ri'
import * as C from '../../../assets/styles/global-styles'
import TableTitle from '../tableTitle/TableTitle'
import TableHeader from '../tableHead/TableHeader'
import TableBody from '../tableBody/TableBody'
import { Product } from '@/services/getAllRequest'

type SetClassificationFn = (
  classification: 'EM_ALTA' | 'EM_BAIXA' | null
) => void

type ProductTableMainProps = {
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
  showScrollbar?: boolean
}

export default function ProductTableMain({
  filteredProducts,
  setProductClassification,
  productColumns,
  tableTitle,
  titleColor,
  showButtons,
  tableTitleIcon,
  tableTitleIconBackgroundColor,
  showPercentColumn,
  showArrowIcon,
  showQuantityColumn,
  showScrollbar = false
}: ProductTableMainProps) {
  const data = filteredProducts.map(product => ({
    nextPurchase: product.nextPurchase,
    lastPurchase: product.lastPurchase,
    classificacao: product.classificacao,
    quantidade: product.quantidade,
    id: product.id,
    nome: product.nome,
    percentual: product.percentual
  }))

  return (
    <C.MainCenter>
      <C.FieldTableTitle>
        <TableTitle
          icon={
            <C.SpanTable
              style={{ backgroundColor: tableTitleIconBackgroundColor }}
            >
              {tableTitleIcon}
            </C.SpanTable>
          }
          title={tableTitle || 'Produtos'}
          titleColor={titleColor}
          onClassificationChange={setProductClassification}
          showButtons={showButtons}
        />
      </C.FieldTableTitle>
      <C.Table
        style={{
          overflowY: showScrollbar ? 'auto' : undefined,
          maxHeight: '100px'
        }}
      >
        <TableHeader columns={productColumns} />
        <TableBody
          data={filteredProducts}
          productClassName="product"
          showStatusColumn={false}
          showArrowIcon={showArrowIcon}
          columns={productColumns}
          showQuantityColumn={showQuantityColumn}
          isProductTable={true}
          showPercentColumn={showPercentColumn}
          showLastPurchase={true}
          showNextPurchase={true}
        />
      </C.Table>
    </C.MainCenter>
  )
}
