import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import * as C from '../assets/styles/global-styles'
import { Link, useParams } from 'react-router-dom'
import SideBar from '@/components/ui/sidebar/Sidebar'
import Header from '@/components/ui/header/Header'
import FieldGraphic from '@/components/ui/fieldGraphic/FieldGraphic'
import Main from '@/components/ui/main/Main'

export default function ClientDetails() {
  const { clientId } = useParams()
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
          subPageClient="clientDetails"
          backgroundColor="#fff"
          id={Number(clientId)}
        />
        <Main
          subPageClient="clientDetails"
          id={Number(clientId)}
          subPageProduct={''}
        />
      </C.CenterGrid>
    </C.Grid>
  )
}
