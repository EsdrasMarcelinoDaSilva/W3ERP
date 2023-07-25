import SideBar from '@/components/ui/sidebar/Sidebar'
import * as C from '../assets/styles/global-styles'
import Header from '@/components/ui/header/Header'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useLocation, useParams } from 'react-router-dom'
import FieldGraphic from '@/components/ui/fieldGraphic/FieldGraphic'
import ProductTableMain from '@/components/ui/productTableMain/ProductTableMain'
import {
  GetPredictionDataClient,
  GetPredictionEndingProps,
  GetPreditionEnding,
  GetPreditionHistoric,
  GetPreditionHistoricProps
} from '@/services/getAllRequest'
import { LuHistory } from 'react-icons/lu'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { GetPredictionDataClientProps } from '@/types/GetPredictionDataClientProps'

export default function Clients() {
  const { id } = useParams()
  const [data, setData] = useState<GetPredictionDataClientProps | null>(null)
  const [ending, setEnding] = useState<GetPredictionEndingProps | null>(null)
  const [historic, setHistoric] = useState<GetPreditionHistoricProps | null>(
    null
  )

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetPredictionDataClient(id!)
        console.log(response)
        setData(response)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(id)
        const result = await GetPreditionEnding(id!)
        setEnding(result)
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await GetPreditionHistoric(id!)
        setHistoric(result)
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const historicColumns = [
    'ID',
    'Produto',
    'Ultima compra',
    '',
    'Qtd',
    'Dar baixa'
  ]
  const productColumns = [
    'ID',
    'Produto',
    'Ultima compra',
    'Proxima compra',
    'Qtd',
    'Dar baixa'
  ]
  const historicProducts = (historic?.content || []).map(
    (product: GetPreditionHistoricProps['content'][0]) => {
      return {
        id: product.id,
        nome: product.nome,
        classificacao: product.classificacao,
        percentual: product.percentual,
        lastPurchase: product.ultimaCompra,
        quantidade: product.quantidade,
        nextPurchase: ''
      }
    }
  )
  const endingProducts = (ending?.content || []).map(
    (product: GetPredictionEndingProps['content'][0]) => {
      return {
        id: product.id,
        nome: product.nome,
        classificacao: product.classificacao,
        percentual: product.percentual,
        lastPurchase: product.ultimaCompra,
        nextPurchase: product.proximaCompra,
        quantidade: product.quantidade
      }
    }
  )

  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <C.Anchor style={{ marginBottom: '1em', marginLeft: '-.9em' }}>
          <BsFillArrowLeftCircleFill size={24} color="#616161" className="bs" />
          <Link to="/predictions" className="link-anc">
            Predição
          </Link>
        </C.Anchor>
        <FieldGraphic
          title={data?.nome}
          phoneNumber={data?.telefone ?? ''}
          email={data?.email ?? ''}
          className="fdiv"
          showGraphic={false}
          showIcons={false}
          showContactInfo={true}
          titleMarginTop="1em"
          height="6.75em"
        />
        <C.Main>
          <ProductTableMain
            filteredProducts={historicProducts}
            setProductClassification={() => {}}
            productColumns={historicColumns}
            tableTitleIcon={<LuHistory size={25} color="#616161" />}
            tableTitleIconBackgroundColor="#EEEEEE"
            tableTitle="Histórico"
            showButtons={false}
            showArrowIcon={false}
            showQuantityColumn={true}
            showPercentColumn={false}
            showLastPurchase={true}
            showDarBaixaColumn={true}
          />
          <ProductTableMain
            filteredProducts={endingProducts}
            setProductClassification={() => {}}
            productColumns={productColumns}
            tableTitleIcon={<RiShoppingBasketLine size={25} color="#FF3333" />}
            tableTitleIconBackgroundColor="#FFE1E1"
            tableTitle="Produtos esgotados"
            titleColor="#FF3333"
            showButtons={false}
            showArrowIcon={false}
            showQuantityColumn={true}
            showPercentColumn={false}
            showLastPurchase={true}
            showNextPurchase={true}
            showDarBaixaColumn={true}
          />
        </C.Main>
      </C.CenterGrid>
    </C.Grid>
  )
}
