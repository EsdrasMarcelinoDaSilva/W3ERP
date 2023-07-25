import * as C from '../assets/styles/global-styles'
import Header from '@/components/ui/header/Header'
import SideBar from '@/components/ui/sidebar/Sidebar'
import FieldGraphic from '@/components/ui/fieldGraphic/FieldGraphic'
import Main from '@/components/ui/main/Main'

export default function Dashboard() {
  return (
    <C.Grid>
      <SideBar />
      <C.CenterGrid>
        <Header />
        <FieldGraphic />
        <Main />
      </C.CenterGrid>
    </C.Grid>
  )
}
