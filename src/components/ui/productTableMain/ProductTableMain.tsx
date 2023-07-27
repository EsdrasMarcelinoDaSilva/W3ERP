import * as C from '../../../assets/styles/global-styles'
import TableTitle from '../tableTitle/TableTitle'
import TableHeader from '../tableHead/TableHeader'
import TableBody from '../tableBody/TableBody'
import { ProductTableMainProps } from '@/types/ProductTableMainProps'

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
  showDarBaixaColumn
}: ProductTableMainProps) {
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
      <C.Table>
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
          showDarBaixaColumn={showDarBaixaColumn}
        />
      </C.Table>
    </C.MainCenter>
  )
}
