import * as C from '../assets/styles/global-styles'
import SideBar from '@/components/ui/sidebar/Sidebar'
import Header from '@/components/ui/header/Header'
import { CiSearch } from 'react-icons/ci'
import SearchInput from '@/components/ui/input/SearchInput'
import TableCard from '@/components/ui/card/TableCard'
import CardHeader from '@/components/ui/card/CardHeader'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetCardPrediction } from '@/services/getAllRequest'
import { GetPreditionCard } from '@/types/GetpredictionCard'
import { removeAccents } from '@/utils/utils'

export default function Predictions() {
  const [data, setData] = useState<GetPreditionCard | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [delay, setDelay] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await GetCardPrediction()
        setData(result)
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelay(searchTerm)
    }, 500)
    return () => clearTimeout(timeoutId)
  }, [searchTerm])

  const filterData = data?.content.filter(item =>
    removeAccents(item.nome.toLowerCase()).startsWith(
      removeAccents(delay.toLowerCase())
    )
  )

  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <C.TextTitle>Predições</C.TextTitle>
        <C.FieldSearch>
          <SearchInput
            icon={<CiSearch size={20} />}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </C.FieldSearch>
        <C.MainCards>
          {filterData &&
            filterData.map((cliente, index) => (
              <C.FieldCard
                key={cliente.id}
                onClick={() => {
                  navigate(`/clientHistory/${cliente.id}`)
                }}
              >
                <CardHeader
                  title={cliente.nome}
                  status={cliente.classificacao}
                />
                <TableCard
                  data={cliente.produtos.map((produto, index) => ({
                    nome: produto.nome,
                    content: produto.proximaCompra,
                    title: ''
                  }))}
                />
              </C.FieldCard>
            ))}
        </C.MainCards>
      </C.CenterGrid>
    </C.Grid>
  )
}
