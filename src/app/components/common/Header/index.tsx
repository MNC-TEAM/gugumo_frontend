import { useAppDispatch, useAppSelector } from '@/store/hook'
import { Flex, HeaderStyle, LoginStyle, Wrapper } from './style'
import Link from 'next/link'
import { login, logout } from '@/store/features/auth/user';

export default function Header() {

  const user = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();

  return (
    <HeaderStyle>
      <Wrapper>
        <Link href={'/'}><img src='/asset/logo.svg'/></Link>
        {
          !user ?
            <LoginStyle onClick={()=>dispatch(login())}>로그인</LoginStyle>
          :
            <Flex>
              {/* <img src="/asset/icon/bell.svg" alt="알림창" /> */}
              <Link href={"/bookmark"}><img src="/asset/icon/bookmark.svg" alt="북마크" width={24}/></Link>
              <button onClick={()=>dispatch(logout())}><img src="/asset/icon/user.svg" alt="유저" /></button>
            </Flex>
        }
      </Wrapper>
    </HeaderStyle>
  )
}