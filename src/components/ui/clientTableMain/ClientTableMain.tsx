import { LiaUserSecretSolid } from 'react-icons/lia'
import * as C from '../../../assets/styles/global-styles'
import TableTitle from '../tableTitle/TableTitle'
import TableBody from '../tableBody/TableBody'
import TableHeader from '../tableHead/TableHeader'
import { ClientTableMainProps } from '@/types/ClientTableMainProps'

export default function ClientTableMain({
  filteredClients,
  setClientClassification,
  customerColumns
}: ClientTableMainProps) {
  return (
    <C.MainCenter>
      <C.FieldTableTitle>
        <TableTitle
          icon={
            <C.SpanTable style={{ backgroundColor: '#001C98' }}>
              <LiaUserSecretSolid size={25} color="#ffffffc1" />
            </C.SpanTable>
          }
          title="Clientes"
          onClassificationChange={setClientClassification}
        />
      </C.FieldTableTitle>
      <C.Table>
        <TableHeader columns={customerColumns} />
        <TableBody
          data={filteredClients}
          productClassName="customers"
          showStatusColumn={false}
          showArrowIcon={true}
          columns={customerColumns}
          showQuantityColumn={false}
          isProductTable={false}
          showPercentColumn={true}
        />
      </C.Table>
    </C.MainCenter>
  )
}
