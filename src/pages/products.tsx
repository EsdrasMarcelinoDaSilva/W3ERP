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
import { LuFilter } from 'react-icons/lu'

const columns = ['ID', 'Produto', 'Status', 'Percentual']

export default function Products() {
  const [showDiv, setShowDiv] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [products, setProducts] = useState<GetProductProps['content']>([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [tableData, setTableData] = useState(products)
  const [searchTerm, setSearchTerm] = useState('')
  const [delay, setDelay] = useState('')

  useEffect(() => {
    async function fetchData() {
      const data = await GetProductPage(searchTerm, page)
      setProducts(data.content)
      setTotalPages(data.totalPages)
    }
    fetchData()
  }, [page, searchTerm])

  useEffect(() => {
    setTableData(products)
  }, [products])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelay(searchTerm)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  const filteredProducts = products.filter(product => {
    if (selectedOption.length === 0 || selectedOption.includes('all')) {
      return true
    } else if (
      selectedOption.includes('up') &&
      product.classificacao === 'EM_ALTA'
    ) {
      return true
    } else if (
      selectedOption.includes('down') &&
      product.classificacao === 'EM_BAIXA'
    ) {
      return true
    } else {
      return false
    }
  })

  useEffect(() => {
    const filteredProducts = products.filter(product => {
      return product.nome.toLowerCase().includes(delay.toLowerCase())
    })
    setTableData(filteredProducts)
  }, [delay])

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

  const handleApplyFilter = () => {
    setTableData(filteredProducts)
    console.log(tableData)
  }

  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <C.TextTitle>Produtos</C.TextTitle>
        <C.FieldSearch>
          <SearchInput
            icon={<CiSearch size={20} />}
            onChange={event => setSearchTerm(event.target.value)}
          />
          <C.SpanFiltered onClick={() => setShowDiv(!showDiv)}>
            <LuFilter />
          </C.SpanFiltered>
          {showDiv && (
            <C.Filter>
              <C.FilterBy>
                <C.Strong>Filtar por:</C.Strong>
              </C.FilterBy>
              <hr />
              <C.LabelCheck>
                <C.InputCheck
                  type="checkbox"
                  checked={selectedOption === 'all'}
                  onChange={() =>
                    setSelectedOption(selectedOption === 'all' ? '' : 'all')
                  }
                />
                <C.Strong>Todos</C.Strong>
              </C.LabelCheck>
              <C.LabelCheck>
                <C.InputCheck
                  type="checkbox"
                  checked={selectedOption === 'up'}
                  onChange={() =>
                    setSelectedOption(selectedOption === 'up' ? '' : 'up')
                  }
                />
                Em alta
              </C.LabelCheck>
              <C.LabelCheck>
                <C.InputCheck
                  type="checkbox"
                  checked={selectedOption === 'down'}
                  onChange={() =>
                    setSelectedOption(selectedOption === 'down' ? '' : 'down')
                  }
                />
                Em baixa
              </C.LabelCheck>
              <C.ButtonCheck onClick={handleApplyFilter}>Aplicar</C.ButtonCheck>
            </C.Filter>
          )}
          <C.Table>
            <TableHeader columns={columns} />
            <TableBody
              data={tableData}
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
