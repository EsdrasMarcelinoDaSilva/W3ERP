import * as C from '../../../assets/styles/global-styles'
import { RxPerson } from 'react-icons/rx'
import logout from '../../../assets/images/logout.gif'
import { FiChevronDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function Header() {
  const [showDiv, setShowDiv] = React.useState(false)
  const navigate = useNavigate()
  const email = localStorage.getItem('email')
  const handleClick = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <C.Header>
      <C.RxUser>
        <RxPerson color="white" size={24} />
      </C.RxUser>
      <C.UserHeader>
        <C.UserInfo>Esdras Marcelino</C.UserInfo>
        <C.SpanInfo>{email}</C.SpanInfo>
        <C.SpanInfo onClick={() => setShowDiv(!showDiv)}>
          <FiChevronDown />
        </C.SpanInfo>
      </C.UserHeader>
      {showDiv && (
        <C.Logout onClick={handleClick}>
          <C.Image src={logout} alt="Logout" />
          <C.UserInfo>Sair</C.UserInfo>
        </C.Logout>
      )}
    </C.Header>
  )
}
