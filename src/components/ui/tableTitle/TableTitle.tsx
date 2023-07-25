import { TableTitleProps } from '../../../types/TableTitleProps'
import * as C from '../../../assets/styles/global-styles'
import React from 'react'

interface Props extends TableTitleProps {
  title: string
  titleColor?: string
  icon: React.ReactNode
  showTitleRight?: boolean
  onClassificationChange: (
    classification: 'EM_ALTA' | 'EM_BAIXA' | null
  ) => void
  showButtons?: boolean
}

const TableTitle: React.FC<Props> = ({
  icon,
  title,
  titleColor,
  onClassificationChange,
  showTitleRight = true,
  showButtons = true
}) => {
  const [activeButton, setActiveButton] = React.useState<
    'left' | 'right' | null
  >(null)

  const handleLeftButtonClick = () => {
    setActiveButton('left')
    console.log('onClassificationChange:', 'EM_ALTA')
    onClassificationChange('EM_ALTA')
  }

  const handleRightButtonClick = () => {
    setActiveButton('right')
    onClassificationChange('EM_BAIXA')
  }

  const handleIconClick = () => {
    setActiveButton(null)
    onClassificationChange(null)
  }

  return (
    <>
      <C.TitleLeft onClick={handleIconClick}>
        {icon}
        <C.TitleText style={{ color: titleColor }}>{title}</C.TitleText>
      </C.TitleLeft>
      {showButtons && showTitleRight && (
        <C.TitleRight>
          <C.ButtonTable
            className={activeButton === 'left' ? 'alta' : undefined}
            onClick={handleLeftButtonClick}
            style={{
              backgroundColor: activeButton === 'left' ? '#00C247' : undefined,
              color: activeButton === 'left' ? '#ffffff' : undefined
            }}
          >
            Em alta
          </C.ButtonTable>
          <C.ButtonTable
            onClick={handleRightButtonClick}
            style={{
              backgroundColor: activeButton === 'right' ? '#FF3333' : undefined,
              color: activeButton === 'right' ? '#ffffff' : undefined
            }}
          >
            Em baixa
          </C.ButtonTable>
        </C.TitleRight>
      )}
    </>
  )
}
export default TableTitle
