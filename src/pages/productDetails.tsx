import * as C from '../assets/styles/global-styles'
import Header from '@/components/ui/header/Header'
import SideBar from '@/components/ui/sidebar/Sidebar'
import Main from '@/components/ui/main/Main'
import FieldGraphic from '@/components/ui/fieldGraphic/FieldGraphic'
import { Link, useParams } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

export default function ProductDetails() {
  const { productId } = useParams()
  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <C.Anchor>
          <BsFillArrowLeftCircleFill size={20} color="#616161" className="bs" />
          <Link to="/dashboard" className="link-anc">
            Detalhamento
          </Link>
        </C.Anchor>
        <FieldGraphic
          subPageProduct="productDetails"
          backgroundColor="#fff"
          id={Number(productId)}
          title=""
          showGraphic={true}
          phoneNumber={''}
          email={''}
          className=""
        />
        <Main
          subPageProduct="productDetails"
          id={Number(productId)}
          subPageClient={''}
        />
      </C.CenterGrid>
    </C.Grid>
  )
}
