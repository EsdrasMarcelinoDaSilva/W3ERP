import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'
import * as C from '../../../assets/styles/global-styles'
import TableBody from '../tableBody/TableBody'
import TableHeader from '../tableHead/TableHeader'
import TableTitle from '../tableTitle/TableTitle'
import { GetProductClientProps } from '@/types/GetProductClientProps'

type SetClassificationFn = (
  classification: 'EM_ALTA' | 'EM_BAIXA' | null
) => void

type ProductTableProps = {
  productClientData: {
    dataEmAlta: GetProductClientProps | null
    dataEmBaixa: GetProductClientProps | null
  }
  setProductClassification: SetClassificationFn
  setClientClassification: SetClassificationFn
  customerColumns: string[]
}

export default function ProductTable({
  productClientData,
  setProductClassification,
  setClientClassification,
  customerColumns
}: ProductTableProps) {
  return (
    <C.Main>
      <C.MainCenter>
        <C.FieldTableTitle>
          <TableTitle
            icon={
              <C.SpanTable style={{ backgroundColor: '#FF3333' }}>
                <HiTrendingDown size={20} color="#fff" />
              </C.SpanTable>
            }
            title="Clientes em baixa"
            onClassificationChange={setProductClassification}
            showTitleRight={false}
          />
        </C.FieldTableTitle>
        <C.Table>
          <TableHeader columns={customerColumns} />
          <TableBody
            data={productClientData.dataEmBaixa}
            productClassName="product"
            showStatusColumn={false}
            showArrowIcon={false}
            showPercentColumn={true}
            showQuantityColumn={true}
            columns={[]}
          />
        </C.Table>
      </C.MainCenter>

      <C.MainCenter>
        <C.FieldTableTitle>
          <TableTitle
            icon={
              <C.SpanTable style={{ backgroundColor: '#00C247' }}>
                <HiTrendingUp size={20} color="#fff" />
              </C.SpanTable>
            }
            title="Clientes em alta"
            onClassificationChange={setClientClassification}
            showTitleRight={false}
          />
        </C.FieldTableTitle>
        <C.Table>
          <TableHeader columns={customerColumns} />
          <TableBody
            data={productClientData.dataEmAlta}
            productClassName="customers"
            showStatusColumn={false}
            showArrowIcon={false}
            showPercentColumn={true}
            showQuantityColumn={true}
            columns={[]}
          />
        </C.Table>
      </C.MainCenter>
    </C.Main>
  )
}
