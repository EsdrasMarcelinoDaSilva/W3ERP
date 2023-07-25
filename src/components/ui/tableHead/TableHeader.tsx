import * as C from '../../../assets/styles/global-styles'
import { TableHeaderProps } from '../../../types/TableTitleProps'

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <C.Thead>
      <C.Trow className="Headrow">
        {columns.map((column, index) => (
          <C.Theader
            key={column}
            className={`column-${index} ${column === 'Status' ? 'padded' : ''}`}
          >
            {column}
          </C.Theader>
        ))}
      </C.Trow>
    </C.Thead>
  )
}
export default TableHeader
