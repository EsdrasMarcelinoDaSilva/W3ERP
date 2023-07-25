import * as C from '../../../assets/styles/global-styles'
import Graphic from '../graphic/Graphic'
import { ClienteDetailsProps } from '@/types/ClienteDetailsProps'

export default function ClientDetails({
  clientDetailsData,
  backgroundColor
}: ClienteDetailsProps) {
  return (
    <>
      {clientDetailsData && <C.HThree>{clientDetailsData.nome}</C.HThree>}
      <C.FieldGraphic style={{ backgroundColor }}>
        {clientDetailsData && (
          <C.BoxGraphic>
            <Graphic
              title="Média 120 dias"
              number={clientDetailsData.media120Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 30 dias"
              number={clientDetailsData.ultimos30Dias}
              showChange
              change={`${clientDetailsData.percentualUltimos30Dias}%`}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 60 dias"
              number={clientDetailsData.ultimos60Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 90 dias"
              number={clientDetailsData.ultimos90Dias}
              hideCircle
              boxShadow="0px 0px 10px rgba(0,0,0,0.3)"
              backgroundColor="#fff"
              titleColor="#000"
              numberColor="#001C98"
              marginTop=".6em"
            />
            <Graphic
              title="Últimos 120 dias"
              number={clientDetailsData.ultimos120Dias}
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
