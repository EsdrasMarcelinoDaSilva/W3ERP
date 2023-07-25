import * as F from '@/assets/styles/global-styles'
import man from '../assets/images/man.jpg'
import hands from '../assets/images/hands.jpg'
import graphic from '../assets/images/graphic.jpg'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useLogin } from '@/hook/UseLogin'
import { handleSubmit } from '@/services/handles/handleSubmit'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { result, login } = useLogin()
  const navigate = useNavigate()

  const handleIconClick = () => {
    setPasswordVisible(!passwordVisible)
  }
  const handleSuccess = () => {
    navigate('/dashboard')
  }
  return (
    <>
      <F.Container>
        <F.FieldForm>
          <F.Form onSubmit={handleSubmit(login, handleSuccess)}>
            <F.Paragraph>Seja Bem Vindo!</F.Paragraph>
            <F.Heading2>Realize seu Login</F.Heading2>
            <F.Fieldset>
              <F.Legend>E-mail</F.Legend>
              <F.Input type="email" name="email" required />
            </F.Fieldset>
            <F.Fieldset>
              <F.Legend>Senha</F.Legend>
              <F.InputWrapper>
                <F.Input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  required
                />
                <F.IconWrapper onClick={handleIconClick}>
                  {passwordVisible ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </F.IconWrapper>
              </F.InputWrapper>
            </F.Fieldset>

            <F.Box>
              <F.Checkbox type="checkbox" />
              <F.Label>Lembrar-me</F.Label>
              <F.Span>Esqueci minha senha</F.Span>
            </F.Box>

            <F.Button type="submit">Entrar</F.Button>
          </F.Form>
        </F.FieldForm>
        <F.FieldImg>
          <F.Img src={man} />
          <F.ImgHands src={hands} />
          <F.ImgGraphic src={graphic} />
        </F.FieldImg>
      </F.Container>
    </>
  )
}
