import { TableProps } from '@/types/TableCardProps'
import * as C from '../../../assets/styles/global-styles'
import { formatString } from '@/utils/utils'

const TableCard = ({ data }: TableProps) => {
  return (
    <C.TablePrediction>
      <C.Thead>
        <C.TrowCard>
          <C.Th>Produto</C.Th>
          <C.Th>Próx.Compra</C.Th>
        </C.TrowCard>
      </C.Thead>
      <C.Tbody>
        {data.map((item, index) => (
          <C.TrowCard key={index}>
            <C.Td className="left">
              {formatString(item.nome.substring(0, 16))}
            </C.Td>
            <C.Td className="center">{item.content}</C.Td>
          </C.TrowCard>
        ))}
      </C.Tbody>
    </C.TablePrediction>
  )
}

export default TableCard
