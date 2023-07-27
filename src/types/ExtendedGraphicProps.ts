import { GraphicProps } from './GraphicProps'

export interface ExtendedGraphicProps extends GraphicProps {
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
