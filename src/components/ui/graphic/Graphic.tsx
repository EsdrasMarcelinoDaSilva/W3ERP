import * as C from '../../../assets/styles/global-styles'
import { GraphicProps } from '@/types/GraphicProps'

interface ExtendedGraphicProps extends GraphicProps {
  showChange?: boolean
  hideCircle?: boolean
  boxShadow?: string
  backgroundColor?: string
  numberColor?: string
  titleColor?: string
  marginTop?: string
  borderStyle?: React.CSSProperties
  borderPercent?: number | undefined
}

const Graphic: React.FC<ExtendedGraphicProps> = ({
  percent,
  title,
  number,
  change,
  showChange,
  hideCircle,
  boxShadow,
  backgroundColor,
  numberColor,
  titleColor,
  marginTop
}) => {
  const ChangeComponent =
    change && change.startsWith('-') ? C.Negative : C.Positive
  return (
    <C.SpaceGraphic style={{ boxShadow, backgroundColor, marginTop }}>
      {!hideCircle && (
        <C.CircleGraphic>
          <C.FieldSvg>
            <C.Svg>
              <C.Circle cx="25" cy="25" r="25"></C.Circle>
              <C.Circle cx="25" cy="25" r="25" percent={percent}></C.Circle>
            </C.Svg>
            <C.SpanPercent>{percent}%</C.SpanPercent>
          </C.FieldSvg>
        </C.CircleGraphic>
      )}
      <C.PTotal>
        <C.PGraphic style={{ color: titleColor }}>{title}</C.PGraphic>
        <C.FieldPositive>
          <C.SpanNumber style={{ color: numberColor }}>{number}</C.SpanNumber>
          {showChange && change && <ChangeComponent>{change}</ChangeComponent>}
        </C.FieldPositive>
      </C.PTotal>
    </C.SpaceGraphic>
  )
}
export default Graphic
