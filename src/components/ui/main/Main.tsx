import * as C from '../../../assets/styles/global-styles'
import {
  GetClientProduct,
  GetClients,
  GetProductClient,
  GetProducts
} from '@/services/getAllRequest'
import { useEffect, useState } from 'react'
import { GetProductClientProps } from '@/types/GetProductClientProps'
import { GetClientProductProps } from '@/types/GetClientProductProps'
import ProductTable from '../tableProduct/ProductTable'
import ClientTable from '../tableClient/ClientTable'
import { IdProps } from '@/types/IdProps'
import ProductTableMain from '../productTableMain/ProductTableMain'
import ClientTableMain from '../clientTableMain/ClientTableMain'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { Product } from '@/types/GetProductsResponse'
import { Client } from '@/types/GetClientResponse'

export default function Main({ id, subPageProduct, subPageClient }: IdProps) {
  const customerColumns =
    subPageProduct === 'productDetails'
      ? ['ID', 'Clientes', 'Percentual', 'Qtd']
      : ['ID', 'Clientes', 'Percentual', '']
  const productColumns =
    subPageClient === 'clientDetails'
      ? ['ID', 'Produtos', 'Percentual', 'Qtd']
      : ['ID', 'Produtos', 'Percentual', '', '', '']

  const [product, setProduct] = useState<Array<Product>>([])
  const [client, setClient] = useState<Array<Client>>([])

  const [clientClassification, setClientClassification] = useState<
    'EM_ALTA' | 'EM_BAIXA' | null
  >(null)
  const [productClassification, setProductClassification] = useState<
    'EM_ALTA' | 'EM_BAIXA' | null
  >(null)

  const [productClientData, setProductClientData] = useState<{
    dataEmAlta: GetProductClientProps | null
    dataEmBaixa: GetProductClientProps | null
  }>({ dataEmAlta: null, dataEmBaixa: null })

  const [clientProductData, setClientProductData] = useState<{
    dataEmAlta: GetClientProductProps | null
    dataEmBaixa: GetClientProductProps | null
  }>({ dataEmAlta: null, dataEmBaixa: null })

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const dataEmAlta = await GetProductClient(id, 'EM_ALTA')
          const dataEmBaixa = await GetProductClient(id, 'EM_BAIXA')
          setProductClientData({ dataEmAlta, dataEmBaixa })
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const dataEmAlta = await GetClientProduct(id, 'EM_ALTA')
          const dataEmBaixa = await GetClientProduct(id, 'EM_BAIXA')
          setClientProductData({ dataEmAlta, dataEmBaixa })
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await GetProducts()
        setProduct(products.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clients = await GetClients()
        setClient(clients.content)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const filteredProducts =
    productClassification === null
      ? product
      : product.filter(
          (product: Product) => product.classificacao === productClassification
        )
  const filteredClients =
    clientClassification === null
      ? client
      : client.filter(
          (client: Client) => client.classificacao === clientClassification
        )
  //---------------------------subPage-product----------------------------------
  if (subPageProduct === 'productDetails') {
    return (
      <ProductTable
        productClientData={productClientData}
        setProductClassification={setProductClassification}
        setClientClassification={setClientClassification}
        customerColumns={customerColumns}
      />
    )
  }
  //-------------------subPage-Client-------------------------------------
  if (subPageClient === 'clientDetails') {
    return (
      <ClientTable
        clientProductData={clientProductData}
        setProductClassification={setProductClassification}
        setClientClassification={setClientClassification}
        productColumns={productColumns}
      />
    )
  }
  //--------------------------Main-Principal------------------------------
  return (
    <C.Main>
      <ProductTableMain
        filteredProducts={filteredProducts}
        setProductClassification={setProductClassification}
        productColumns={productColumns}
        tableTitleIcon={<RiShoppingBasketLine size={25} color="#8f7b7b" />}
        tableTitleIconBackgroundColor="#C5CFFF"
        showButtons={true}
        showPercentColumn={true}
        showArrowIcon={true}
      />
      <ClientTableMain
        filteredClients={filteredClients}
        setClientClassification={setClientClassification}
        customerColumns={customerColumns}
        showPercentColumn={true}
      />
    </C.Main>
  )
}
