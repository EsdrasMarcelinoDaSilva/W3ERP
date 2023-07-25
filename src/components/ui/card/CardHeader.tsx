import * as C from '../../../assets/styles/global-styles'
import { RxPerson } from 'react-icons/rx'
import { RiArrowRightSLine } from 'react-icons/ri'
import { formatString } from '@/utils/utils'
import { CardHeaderProps } from '@/types/CardHeaderProps'

export default function CardHeader({ title, status }: CardHeaderProps) {
  return (
    <C.CenterCard>
      <C.FieldIcon>
        <C.CardIcon>
          <RxPerson size={20} />
        </C.CardIcon>
        <C.FieldTitleCard>
          <C.HeadingFour>{formatString(title.substring(0, 18))}</C.HeadingFour>
          <C.StatusDiv>
            <C.SpanStatus className="signal">•</C.SpanStatus>
            <C.SpanStatus>{status}</C.SpanStatus>
          </C.StatusDiv>
        </C.FieldTitleCard>
      </C.FieldIcon>
      <C.FieldArrow>
        <RiArrowRightSLine />
      </C.FieldArrow>
    </C.CenterCard>
  )
}
