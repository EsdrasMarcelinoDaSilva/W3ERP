import * as C from '../assets/styles//global-styles'
import SideBar from '@/components/ui/sidebar/Sidebar'
import Header from '@/components/ui/header/Header'
import SearchInput from '@/components/ui/input/SearchInput'
import { CiSearch } from 'react-icons/ci'
import TableHeader from '@/components/ui/tableHead/TableHeader'
import TableBody from '@/components/ui/tableBody/TableBody'
import { useEffect, useState } from 'react'
import { GetProductPage } from '@/services/getAllRequest'
import { GetProductProps } from '@/types/GetProductProps'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

const columns = ['ID', 'Produto', 'Status', 'Percentual']

export default function Products() {
  const [products, setProducts] = useState<GetProductProps['content']>([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [startPage, setStartPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const data = await GetProductPage(page)
      console.log(data)
      setProducts(data.content)
      setTotalPages(data.totalPages)
    }
    fetchData()
  }, [page])

  const handlePrevClick = () => {
    setPage(page => Math.max(page - 1, 1))
    if (page > 1 && page === startPage) {
      setStartPage(startPage => Math.max(startPage - 1, 1))
    }
  }
  const handleNextClick = () => {
    setPage(page => Math.min(page + 1, totalPages))
    if (page < totalPages && page === startPage + 3) {
      setStartPage(startPage => Math.min(startPage + 1, totalPages - 3))
    }
  }

  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <C.TextTitle>Produtos</C.TextTitle>
        <C.FieldSearch>
          <SearchInput icon={<CiSearch size={20} />} />
          <C.Table>
            <TableHeader columns={columns} />
            <TableBody
              data={products}
              productClassName="product"
              showStatusColumn={true}
              showPercentColumn={true}
              showLastPurchase={false}
              showNextPurchase={false}
              addPadding={true}
              columns={[]}
            />
          </C.Table>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <C.SpanInformation>
              {page} de {totalPages} itens
            </C.SpanInformation>

            <C.FieldButton>
              <C.ButtonsPages onClick={handlePrevClick}>
                <RiArrowLeftSLine size={20} color="#9e9e9e" />
              </C.ButtonsPages>
              {[...Array(Math.min(4, totalPages))].map((_, i) => (
                <C.FieldSpan
                  key={i}
                  onClick={() => setPage(startPage + i)}
                  className={`pagination-button ${
                    page === startPage + i ? 'selected-page' : ''
                  }`}
                >
                  {startPage + i}
                </C.FieldSpan>
              ))}
              <C.ButtonsPages onClick={handleNextClick}>
                <RiArrowRightSLine size={20} color="#9e9e9e" />
              </C.ButtonsPages>
            </C.FieldButton>
          </div>
        </C.FieldSearch>
      </C.CenterGrid>
    </C.Grid>
  )
}
