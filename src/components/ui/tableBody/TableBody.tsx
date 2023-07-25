import * as C from '../../../assets/styles/global-styles'
import { RiArrowRightSLine } from 'react-icons/ri'
import { TableBodyProps } from '@/types/TableBodyProps'
import { useNavigate } from 'react-router-dom'
import { BsCheckCircle } from 'react-icons/bs'

const TableBody: React.FC<
  TableBodyProps & {
    addPadding?: boolean
    padding?: string
    isProductTable?: boolean
    showPercentColumn?: boolean
    showArrowIcon?: boolean
    showLastPurchase?: boolean
    showNextPurchase?: boolean
    showDarBaixaColumn?: boolean
  }
> = ({
  data,
  productClassName,
  showStatusColumn,
  showArrowIcon,
  addPadding,
  padding,
  showQuantityColumn,
  isProductTable = false,
  showPercentColumn,
  showLastPurchase,
  showNextPurchase,
  showDarBaixaColumn
}) => {
  const navigate = useNavigate()

  const handleArrowClick = (id: number, isProductTable: boolean) => {
    if (isProductTable) {
      navigate(`/products/${id}`)
    } else {
      navigate(`/clients/${id}`)
    }
  }
  return (
    <C.Tbody>
      {data &&
        data.map(row => (
          <C.Trow key={row.id}>
            <C.StyledTd className="id" addPadding={addPadding}>
              {row.id}
            </C.StyledTd>
            <C.StyledTd className={productClassName} addPadding={addPadding}>
              {row.nome}
            </C.StyledTd>
            {showStatusColumn && (
              <C.StyledTd className="status" addPadding={addPadding}>
                <C.SpanSt
                  className={row.classificacao === 'EM_ALTA' ? 'green' : 'red'}
                >
                  {row.classificacao === 'EM_ALTA' ? 'Em alta' : 'Em baixa'}
                </C.SpanSt>
              </C.StyledTd>
            )}
            {showPercentColumn && (
              <C.StyledTd className="percent" addPadding={addPadding}>
                {row.percentual}%
              </C.StyledTd>
            )}
            {showLastPurchase && (
              <C.StyledTd className="lastPurchase" addPadding={addPadding}>
                {row.lastPurchase}
              </C.StyledTd>
            )}
            {showNextPurchase && (
              <C.StyledTd className="nextPurchase" addPadding={addPadding}>
                {row.nextPurchase}
              </C.StyledTd>
            )}
            {showQuantityColumn && (
              <C.StyledTd
                className="quantity"
                padding={padding}
                addPadding={addPadding}
              >
                {row.quantidade}
              </C.StyledTd>
            )}
            {showArrowIcon && (
              <C.StyledTd
                className="arrow"
                addPadding={addPadding}
                onClick={() => handleArrowClick(row.id, isProductTable)}
              >
                <RiArrowRightSLine />
              </C.StyledTd>
            )}
            {showDarBaixaColumn && (
              <C.StyledTd className="writeOff" addPadding={addPadding}>
                <C.SpanCheckCircle>
                  <BsCheckCircle color="#004CE8" />
                </C.SpanCheckCircle>
              </C.StyledTd>
            )}
          </C.Trow>
        ))}
    </C.Tbody>
  )
}
export default TableBody
