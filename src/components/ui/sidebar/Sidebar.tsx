import * as C from '../../../assets/styles/global-styles'
import logo from '../../../assets/images/logo.png'
import fingers from '../../../assets/images/fingers.png'
import { BiTime } from 'react-icons/bi'
import { AiOutlineLineChart, AiOutlineShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { handleClickSite } from '@/utils/utils'

export default function SideBar() {
  return (
    <C.SideBar>
      <C.ImageLogo src={logo} alt="" />
      <C.Navigation className="anc">
        <C.Nav>
          <BiTime size={25} color="white" />
          <Link to={'/dashboard'} className="custom">
            Dashboard
          </Link>
        </C.Nav>

        <C.Nav>
          <AiOutlineLineChart size={25} color="white" />
          <Link to={'/predictions'} className="custom">
            Predições
          </Link>
        </C.Nav>

        <C.Nav>
          <AiOutlineShopping size={25} color="white" />
          <Link to={'/products'} className="custom">
            Produtos
          </Link>
        </C.Nav>
      </C.Navigation>
      <C.FingersContainer>
        <C.FingerImage src={fingers} alt="" />
        <C.Bottom>
          <C.BottomP>
            Precisando de <b>ajuda</b> ou <b>suporte</b> em algo?
          </C.BottomP>
          <C.BottomSpan onClick={handleClickSite}>Fale conosco</C.BottomSpan>
        </C.Bottom>
      </C.FingersContainer>
    </C.SideBar>
  )
}
