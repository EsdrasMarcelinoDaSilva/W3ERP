import { createGlobalStyle, css } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
  :root {
    --dark: #313131;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    height: 100%;
  }
  body{
    height: 100%;
  }
  body, input, select, textarea {
    font-size: 1rem;
    color: var(--dark);
  }
`
const GlobalFonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap');
`

//-----------home page------------//
export const Container = styled.div`
  display: flex;
  height: 100vh;
`
export const FieldForm = styled.main`
  display: flex;
  align-items: center;
  width: 50%;
`
export const FieldImg = styled.section`
  width: 50%;
  height: auto;
  background-color: #001c98;
  position: relative;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.7em;
  .bntname {
    background-color: yellow;
    color: #fff;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
`
export const ImgHands = styled.img`
  position: absolute;
  bottom: 21.8%;
  left: 6.8%;
  width: 8%;
  height: 6.5%;
`
export const ImgGraphic = styled.img`
  position: absolute;
  top: 24.5%;
  right: 6.7%;
  width: 8%;
  height: 5.6%;
`
export const Legend = styled.legend`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  margin-left: 0.5em;
`
export const IconWrapper = styled.div`
  position: absolute;
  right: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
export const Fieldset = styled.fieldset`
  width: 44%;
  border: 0.125em solid #e0e0e0;
  border-radius: 0.5em;
  transition: border-color 0.3s ease;
  overflow: hidden;
  &:focus-within {
    border-color: #00c247;
    ${Legend} {
      color: #00c247;
    }
    ${IconWrapper} {
      color: #00c247;
    }
  }
`
export const InputWrapper = styled.div`
  position: relative;
  .img {
    position: absolute;
  }
`
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 0.3em;
  width: 100%;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1.4em #fff inset;
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.9em;
`
export const Span = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 0.8em;
  margin-left: 3.7em;
`
export const Checkbox = styled.input`
  margin-right: 1.3em;
`
export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  font-weight: bold;
  margin-left: -2em;
`
export const Heading2 = styled.h2`
  font-family: 'Sora', sans-serif;
  margin-left: -4em;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`
export const Paragraph = styled.p`
  margin-left: -11em;
  font-family: 'Sora', sans-serif;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`
export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  padding: 0.8em;
  border: none;
  color: #fff;
  background-color: #001c98;
  border-radius: 0.5em;
  width: 44%;
  margin-top: 0.4em;
`

// ------------layout & aside-------------//
export const Grid = styled.div`
  display: flex;
  height: 100vh;
`
export const CenterGrid = styled.div`
  flex-grow: 1;
`
export const SideBar = styled.aside`
  flex: 0 0 15rem;
  background-color: #001c98;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
`
export const ImageLogo = styled.img`
  margin: 0 auto;
  margin-top: 2em;
  width: 60%;
  background-color: #001c98;
`
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-left: 1.1em;
  border-radius: 1em;
  width: 86%;
  height: 11rem;
  margin-bottom: 1em;
  color: #fff;
  background-color: #796ce0;
`
export const BottomP = styled.p`
  text-align: center;
  margin-bottom: 1.125em;
`
export const BottomSpan = styled.span`
  cursor: pointer;
  text-align: center;
  margin-bottom: -3.5em;
  background-color: #001c98;
  padding: 0.7rem;
  border-radius: 1.5em;
  color: #fff;
`
export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -8.125em;
  gap: 0.7rem;
`
export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6em 0.6em 0.6em 1em;
  gap: 1rem;
  .custom {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    background-color: #7682c1;
    transition: color 0.3s ease;
    width: 14rem;
    border-radius: 0.6em;
    margin-left: 0.5em;
  }
`
export const FingersContainer = styled.div`
  position: relative;
  align-self: flex-end;
  margin-bottom: -0.5em;
`
export const FingerImage = styled.img`
  position: absolute;
  top: -46%;
  left: 14%;
  width: 72%;
`

//---------------Header-----------------//
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding-top: 0.5em;
  justify-content: flex-end;
  width: 100%;
  height: 4.69em;
`
export const Image = styled.img``
export const UserHeader = styled.div`
  text-align: left;
  padding: 0.5em;
  margin-right: 0.6em;
`
export const RxUser = styled.div`
  border-radius: 100%;
  background-color: #001c98;
  padding: 0.3em 0.5em;
`
export const Logout = styled.div`
  font-family: 'Poppins', sans-serif;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 150px;
  display: flex;
  align-items: center;
  margin-right: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
  gap: 1em;
  cursor: pointer;
`
export const UserInfo = styled.p`
  font-weight: bold;
  font-family: 'Sora', sans-serif;
`
export const SpanInfo = styled.span`
  font-family: 'Poppins', sans-serif;
  padding: 0.3em;
`
export const SpanFiltered = styled.span`
  display: flex;
  position: absolute;
  border-radius: 0.5em;
  background-color: #f5f5f5;
  padding: 0.7em;
  top: 3.5%;
  left: 32%;
`
//----------------graphics-----------------//
export const FieldGraphic = styled.section`
  font-family: 'Sora', sans-serif;
  background-color: #001c98;
  width: 97%;
  height: 8.75em;
  margin-bottom: 0.8em;
  margin-left: 1.25em;
  border-radius: 1em;
  padding: 1em;
  gap: 1.2rem;
`
export const FieldInfo = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 1em;
  font-family: 'Poppins', sans-serif;
`
export const BoxGraphic = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`
export const TitleFilter = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SpanContact = styled.span``
export const SpanFilter = styled.span`
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8em;
  padding: 0.2em 0.2em 0.2em 0.4em;
  border-radius: 0.4em;
`
export const B = styled.strong`
  color: #001c98;
  display: inline-flex;
  align-items: center;
`
export const BoxHeading = styled.div`
  height: 1px;
`
export const HeadingThree = styled.h3`
  font-family: 'Sora', sans-serif;
  color: #fff;
`
export const SpaceGraphic = styled.div`
  background-color: #02156a;
  color: #fff;
  display: flex;
  align-items: center;
  width: 24%;
  height: fit-content;
  padding: 0.5em;
  margin-top: 0.5em;
  margin-left: 0;
  border-radius: 0.5em;
`
export const PTotal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const FieldPositive = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 0.2em;
  gap: 0.5em;
`

//
export const CircleGraphic = styled.div`
  position: relative;
  border-radius: 100%;
  width: 3.6em;
  height: 3.6em;
  padding: 0.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000e4d;
`
export const FieldSvg = styled.div`
  width: 3em;
  height: 3em;
  position: relative;
`
export const Svg = styled.svg`
  position: absolute;
  top: -3px;
  left: -7px;
`
interface CircleProps {
  percent?: number | undefined
}
export const Circle = styled.circle<CircleProps>`
  width: 2em;
  height: 2em;
  fill: none;
  stroke: red;
  stroke-width: 4;
  transform: translate(2px, 2px);
  stroke-dasharray: 156;
  stroke-dashoffset: 156;
  &:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #00003d;
  }
  &:nth-child(2) {
    stroke: #796ce0;
    transition: stroke-dashoffset 0.8s;
    stroke-dashoffset: ${props =>
      props.percent ? 156 - (156 * props.percent) / 100 : 156};
  }
`
export const SpanPercent = styled.span`
  position: absolute;
  top: 16px;
  left: 9px;
  font-size: small;
`
export const PGraphic = styled.span`
  font-size: 0.9em;
  margin-left: 1em;
`
export const SpanNumber = styled.span`
  font-size: 1.4em;
  margin-left: 0.7em;
`
export const Positive = styled.span`
  background-color: #00c247;
  color: #fff;
  border-radius: 1em;
  padding: 0.1em 0.7em 0 0.7em;
`
export const Negative = styled.span`
  background-color: #ff3333;
  color: #fff;
  border-radius: 1em;
  padding: 0.1em 0.7em 0 0.7em;
`
//---------------tables-----------------//
export const Main = styled.main`
  display: flex;
  z-index: 9999;
`
export const MainCenter = styled.div`
  z-index: 9999;
  border-radius: 1.5em;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.7);
  margin: 0 1em;
  width: 100%;
  padding: 0 1em 0.5em 1em;
`
export const Table = styled.table`
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  border-collapse: collapse;
  border-radius: 0.9em;
  width: 100%;
  color: #212121;
  .id {
    text-align: center;
    width: 6em;
  }
  .column-0 {
    text-align: center;
  }
  .column-3 {
    text-align: center;
  }
  .arrow {
    width: 5em;
    text-align: center;
    color: #757575;
  }
  .percent {
    text-align: center;
  }
  .product,
  .customers {
    width: 30em;
  }

  .product-hd {
    width: 30em;
    color: #fff;
  }
  .Headrow {
    border-radius: 1em;
    background-color: #001c98;
    color: #fff;
  }
  th:first-child {
    border-top-left-radius: 0.9em;
  }
  th:last-child {
    border-top-right-radius: 0.9em;
  }
`
export const Thead = styled.thead`
  .padded {
    padding-left: 1.125em;
  }
`
export const Tbody = styled.tbody`
  font-size: 1em;
  .green {
    background-color: #d9fee6;
    color: #00c247;
  }
  .red {
    background-color: #ffe1e1;
    color: #ff3333;
  }
`
export const Trow = styled.tr`
  .quantity {
    text-align: center;
    margin-left: 1em;
  }
`
export const Tdata = styled.td`
  padding: 0.375em;
  border-bottom: 0.125em solid #fff;
  background-color: #ccc;
`
export const Theader = styled.th`
  font-weight: 200;
  padding: 0.5em;
  text-align: left;
`
//---------FieldTableTitle clients & products---------
export const FieldTableTitle = styled.div`
  display: flex;
  padding: 1em 0 1em 0;
  justify-content: space-between;
`
export const TitleLeft = styled.div`
  display: flex;
  align-items: center;
`

export const TitleText = styled.h3`
  font-family: 'Sora', sans-serif;
  margin-left: 0.5em;
`
//-------------------------------------
export const TitleRight = styled.div`
  display: flex;
  margin-top: 0.7em;
  height: 1.5em;
  padding: 0.1875em;
  padding-bottom: 0.5em;
  border-radius: 0.5em;
  background-color: rgba(220, 220, 220, 0.5);
  .alta {
    border-radius: 0.5em 0 0 0.5em;
  }
`
export const SpanTable = styled.span`
  padding: 0.4em;
  border-radius: 0.5em;
`
export const ButtonTable = styled.button`
  padding: 0.25em 0.75em 0.5em 0.75em;
  height: 1.5em;
  border: none;
  border-radius: 0 0.5em 0.5em 0;
  box-shadow: 0 2px 0.25em rgba(0, 0, 0, 0.2);
  color: #9e9e9e;
`
//------------predictions------------
export const FieldSearch = styled.section`
  position: relative;
  padding: 0.7em;
  width: 96%;
  margin-left: 1.25em;
  margin-bottom: 0.8em;
  border-radius: 0.75em;
  box-shadow: 0 0 1.5625em 0 rgba(163, 163, 163, 0.4);
`
export const TextTitle = styled.h3`
  margin: 1.25em 0 0.6em 0.9em;
  font-family: 'Sora', sans-serif;
  font-size: 1.7em;
`
export const InputSearch = styled.input`
  font-family: 'Poppins', sans-serif;
  font-size: small;
  padding: 0.4em;
  margin-left: 0.6em;
  margin-bottom: 1em;
  margin-top: 0.6em;
  width: 30%;
  border: 0.125em solid #e0e0e0;
  padding: 0.5em;
  outline: none;
  border-radius: 0.5em;
`
export const InputWrap = styled.div`
  position: relative;
`
export const IconWrap = styled.div`
  position: absolute;
  left: 18em;
  top: 48%;
  transform: translateY(-50%);
`
export const Filter = styled.div`
  z-index: 4;
  width: 10em;
  display: flex;
  position: fixed;
  top: -24%;
  left: 37%;
  gap: 0.5em;
  border-radius: 0.5em;
  flex-direction: column;
  box-shadow: 0 0 0.625em rgba(0, 0, 0, 0.4);
  padding: 0.7em;
`
export const FilterBy = styled.p``
export const Strong = styled.strong``
export const LabelCheck = styled.label``
export const InputCheck = styled.input`
  margin-right: 0.5em;
`
export const ButtonCheck = styled.button`
  background-color: #001c98;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em;
  color: #fff;
`
//----------------card client--------------------
export const MainCards = styled.main`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  padding: 0.7em;
  width: 97%;
  height: 34.375em;
  margin-left: 0.5em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.375em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 0.5em;
    padding-top: 0.2em;
  }

  &::-webkit-scrollbar-track {
    background-color: lightgray;
  }
`
export const FieldCard = styled.div`
  width: 15.5em;
  height: auto;
  padding: 0.8em;
  border-radius: 1.25em;
  box-shadow: 0 0.4375em 1.875em rgba(0, 0, 0, 0.2);
`
export const CardClient = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625em;
`
export const CenterCard = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: space-between;
`
export const FieldIcon = styled.div`
  display: flex;
  gap: 1em;
`
export const FieldTitleCard = styled.div`
  .signal {
    font-size: 1.1em;
    margin-right: 0.1em;
  }
`
export const HeadingFour = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 0.9375em;
  color: #212121;
`
export const StatusDiv = styled.div`
  display: flex;
  align-items: center;
`
export const SpanStatus = styled.span`
  color: #00c247;
  font-size: 0.7em;
`
export const CardIcon = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  border-radius: 100%;
  background-color: #796ce0;
`
export const FieldArrow = styled.div`
  display: flex;
  align-items: center;
`
export const TablePrediction = styled.table`
  width: 100%;
  border-radius: 0.5em;
  padding: 0.5em;
  background-color: #eeeeee;
`
export const TrowCard = styled.tr`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`
export const Th = styled.th`
  margin-bottom: 0.5em;
`
export const Td = styled.td`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5em;
  color: #424242;
  font-size: 0.875em;
`
//------------product------------
export const StyledTd = styled(Tdata)<{
  addPadding?: boolean
  padding?: string
}>`
  padding: ${props => (props.addPadding ? props.padding || '.9em' : '0')};
  font-size: 0.875em;
  font-family: 'Poppins', sans-serif;
`
export const StyledStatusTd = styled(Tdata)<{ status: string }>`
  padding: 0.625em;
  background-color: ${props => (props.status === 'Alta' ? 'green' : 'red')};
`
export const SpanSt = styled.span`
  padding: 0.4em 0.6em 0.4em 0.6em;
  border-radius: 0.5em;
`
export const SpanCheckCircle = styled.span`
  display: flex;
  justify-content: center;
`
//-------------------------------------------------------------------

export const FieldButton = styled(FieldArrow)`
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
  .selected-page {
    background-color: #001c98;
    color: #fff;
    border: none;
    padding: 0.1em 0.3em 0.1em 0.3em;
    border-radius: 0.3em;
  }
`
export const ButtonsPages = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 0.5em;
`
export const FieldSpan = styled.span`
  font-family: 'Poppins', sans-serif;
`
export const SpanInformation = styled(FieldSpan)`
  margin-top: 0.5em;
  font-size: small;
  color: #9e9e9e;
`
//--------Products Details--------
export const HThree = styled.h3`
  margin: 0.6em 0 0 2em;
  font-family: 'Sora', sans-serif;
  color: #001c98;
`
export const Anchor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-top: 2em;
  .bs {
    margin-left: 2.3em;
  }
  .link-anc {
    text-decoration: none;
    font-family: 'Sora', sans-serif;
    font-size: small;
    color: #212121;
  }
`
