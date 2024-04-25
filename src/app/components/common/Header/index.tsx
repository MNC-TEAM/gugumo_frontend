import { HeaderStyle, LoginStyle, Wrapper } from './style'
import Link from 'next/link'

export default function Header() {
  return (
    <HeaderStyle>
      <Wrapper>
        <Link href={'/'}><img src='/asset/logo.svg'/></Link>
        <LoginStyle href={"/login"}>로그인</LoginStyle>
      </Wrapper>
    </HeaderStyle>
  )
}