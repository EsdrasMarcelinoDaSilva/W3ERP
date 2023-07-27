import {
  GetClientDetails,
  GetProductDetails,
  GetReport
} from '@/services/getAllRequest'
import { GetProductDetailsProps } from '../../../types/GetProductSummaryProps'
import * as C from '../../../assets/styles/global-styles'
import Graphic from '../graphic/Graphic'
import { useEffect, useState } from 'react'
import { GetDashBoardSummaryProps } from '@/types/GetDashBoardSummaryProps'
import { GetClientDetailsProps } from '@/types/GetClientDetailsProps'
import ProductDetails from '../productDetails/ProductDetails'
import ClientDetails from '../clientDetails/ClientDetails'
import { BsCalendar3, BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FieldGraphicsProps } from '@/types/FieldGraphicsProps'

export default function FieldGraphic({
  subPageProduct,
  subPageClient,
  backgroundColor,
  id,
  title = 'Dashboard',
  phoneNumber,
  email,
  className,
  showGraphic = true,
  showContactInfo = false,
  titleMarginTop,
  height,
  showFilter = true
}: FieldGraphicsProps) {
  const [dashBoardData, setDashboardData] =
    useState<GetDashBoardSummaryProps | null>(null)
  const [productDetailsData, setProductDetailsData] =
    useState<GetProductDetailsProps | null>(null)
  const [clientDetailsData, setClientDetailsData] =
    useState<GetClientDetailsProps | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const dataInicio = ''
        const dataFim = ''
        const result = await GetReport(dataInicio, dataFim)
        console.log(result)
        setDashboardData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  //-----instance-ready in productsDetails-----😒-------

  useEffect(() => {
    async function fetchData() {
      try {
        if (id !== undefined) {
          const result = await GetProductDetails(id)
          setProductDetailsData(result)
        }
      } catch (error) {
        console.error('errôôôôô', error)
      }
    }
    fetchData()
  }, [subPageProduct])

  //-----instance-ready in clientsDetails-----😏-------
  useEffect(() => {
    async function fetchData() {
      try {
        if (id !== undefined) {
          const result = await GetClientDetails(id)
          setClientDetailsData(result)
        }
      } catch (error) {
        console.error('errôôôôô', error)
      }
    }
    fetchData()
  }, [subPageClient])

  //-----------------------------------------------------------------------
  if (subPageProduct === 'productDetails') {
    return (
      <ProductDetails
        productDetailsData={productDetailsData}
        backgroundColor={backgroundColor || 'white'}
      />
    )
  }
  //-----------------------------------------------------------------------
  if (subPageClient === 'clientDetails') {
    return (
      <ClientDetails
        clientDetailsData={clientDetailsData}
        backgroundColor={backgroundColor || 'white'}
      />
    )
  }
  //-----------------------------------------------------------------------
  return (
    <>
      <C.FieldGraphic className={className} style={{ height }}>
        <C.TitleFilter style={{ marginTop: titleMarginTop }}>
          <C.HeadingThree>{title}</C.HeadingThree>
          {showFilter && (
            <C.FilterMonth>
              <BsCalendar3 />
              <C.LabelFilter htmlFor="filter">&nbsp;Mostrar:</C.LabelFilter>
              <C.Select className="filtro">
                <C.Option value="this-month">Esse mês</C.Option>
                <C.Option value="one-month">30 dias</C.Option>
                <C.Option value="two-month">60 dias</C.Option>
                <C.Option value="three-month">90 dias</C.Option>
                <C.Option value="four-month">120 dias</C.Option>
              </C.Select>
            </C.FilterMonth>
          )}
        </C.TitleFilter>
        {showContactInfo && (
          <C.FieldInfo>
            <C.SpanContact style={{ color: '#fff' }}>
              <BsTelephone />
            </C.SpanContact>
            <C.SpanContact style={{ color: '#fff' }}>
              {phoneNumber}
            </C.SpanContact>
            <C.SpanContact style={{ color: '#fff' }}>
              <AiOutlineMail />
            </C.SpanContact>
            <C.SpanContact style={{ color: '#fff' }}>{email}</C.SpanContact>
          </C.FieldInfo>
        )}
        {showGraphic && dashBoardData && (
          <C.BoxGraphic>
            <Graphic
              percent={dashBoardData.percentualTotalProdutosAlta}
              title="Total produtos em alta"
              number={dashBoardData.quantidadeProdutosAlta}
              change={`${dashBoardData.percentualVariacaoProdutosAlta}%`}
              showChange
              borderStyle={{
                borderLeftStyle: 'dashed',
                borderLeftColor: '#796CE0'
              }}
            />

            <Graphic
              percent={dashBoardData.percentualTotalProdutosBaixa}
              title="Total produtos em baixa"
              number={dashBoardData.quantidadeProdutosBaixa}
              change={`${dashBoardData.percentualVariacaoProdutosBaixa}%`}
              showChange
              borderStyle={{
                borderLeftStyle: 'dashed',
                borderBottomStyle: 'dashed',
                borderLeftColor: '#796CE0',
                borderBottomColor: '#796CE0'
              }}
            />

            <Graphic
              percent={dashBoardData.percentualTotalClientesAlta}
              title="Total de clientes em alta"
              number={dashBoardData.quantidadeClientesAlta}
              change={`${dashBoardData.percentualVariacaoClientesAlta}%`}
              showChange
              borderStyle={{
                borderRightStyle: 'dashed',
                borderRightColor: '#796CE0'
              }}
            />

            <Graphic
              percent={dashBoardData.percentualTotalClientesBaixa}
              showChange
              title="Total clientes em baixa"
              number={dashBoardData.quantidadeClientesBaixa}
              change={`${dashBoardData.percentualVariacaoClientesBaixa}%`}
              borderStyle={{
                borderBottomStyle: 'dashed',
                borderBottomColor: '#796CE0'
              }}
            />
          </C.BoxGraphic>
        )}
      </C.FieldGraphic>
    </>
  )
}
