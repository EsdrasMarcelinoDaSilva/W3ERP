import * as C from '../../../assets/styles/global-styles'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'
import TableTitle from '../tableTitle/TableTitle'
import TableHeader from '../tableHead/TableHeader'
import TableBody from '../tableBody/TableBody'
import { GetClientProductProps } from '@/types/GetClientProductProps'

type SetClassificationFn = (
  classification: 'EM_ALTA' | 'EM_BAIXA' | null
) => void

type ClientTableProps = {
  clientProductData: {
    dataEmAlta: GetClientProductProps | null
    dataEmBaixa: GetClientProductProps | null
  }
  setProductClassification: SetClassificationFn
  setClientClassification: SetClassificationFn
  productColumns: string[]
}
export default function ClientTable({
  clientProductData,
  setProductClassification,
  setClientClassification,
  productColumns
}: ClientTableProps) {
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
            title="Produtos em baixa"
            onClassificationChange={setProductClassification}
            showTitleRight={false}
          />
        </C.FieldTableTitle>
        <C.Table>
          <TableHeader columns={productColumns} />
          <TableBody
            data={clientProductData.dataEmBaixa}
            productClassName="product"
            showStatusColumn={false}
            showArrowIcon={false}
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
            title="Produtos em alta"
            onClassificationChange={setClientClassification}
            showTitleRight={false}
          />
        </C.FieldTableTitle>
        <C.Table>
          <TableHeader columns={productColumns} />
          <TableBody
            data={clientProductData.dataEmAlta}
            productClassName="customers"
            showStatusColumn={false}
            showArrowIcon={false}
            showQuantityColumn={true}
            columns={[]}
          />
        </C.Table>
      </C.MainCenter>
    </C.Main>
  )
}
