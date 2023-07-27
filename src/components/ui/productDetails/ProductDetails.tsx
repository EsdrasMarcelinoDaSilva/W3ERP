import { GetProductDetailsProps } from '@/types/GetProductSummaryProps'
import * as C from '../../../assets/styles/global-styles'
import Graphic from '../graphic/Graphic'
import { ProductDetailsGraphicProps } from '@/types/ProductDetailsGraphicProps'

export default function ProductDetailsGraphic({
  productDetailsData,
  backgroundColor
}: ProductDetailsGraphicProps) {
  return (
    <>
      {productDetailsData && <C.HThree>{productDetailsData.nome}</C.HThree>}
      <C.FieldGraphic style={{ backgroundColor }}>
        {productDetailsData && (
          <C.BoxGraphic>
            <Graphic
              title="Média 120 dias"
              number={productDetailsData.media120Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 30 dias"
              number={productDetailsData.ultimos30Dias}
              showChange
              change={`${productDetailsData.percentualUltimos30Dias}%`}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 60 dias"
              number={productDetailsData.ultimos60Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 90 dias"
              number={productDetailsData.ultimos90Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 120 dias"
              number={productDetailsData.ultimos120Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
          </C.BoxGraphic>
        )}
      </C.FieldGraphic>
    </>
  )
}
