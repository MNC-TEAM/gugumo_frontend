import { useAppDispatch, useAppSelector } from '@/store/hook'
import { Flex, HeaderStyle, LoginStyle, Wrapper } from './style'
import Link from 'next/link'
import { onLogin } from '@/store/features/modal/modal';

export default function Header() {

  const user = useAppSelector(state=>state.user);
  const dispatch = useAppDispatch();

  return (
    <HeaderStyle>
      <Wrapper>
        <Link href={'/'}><img src='/asset/logo.svg' width={172}/></Link>
        {
          !user ?
            <LoginStyle onClick={()=>dispatch(onLogin())}>로그인</LoginStyle>
          :
            <Flex>
              {/* <img src="/asset/icon/bell.svg" alt="알림창" /> */}
              <Link href={"/bookmark"}><img src="/asset/icon/bookmark.svg" alt="북마크" width={36}/></Link>
              <Link href={"/mypage"}><img src="/asset/icon/user.svg" alt="유저" width={36} /></Link>
            </Flex>
        }
      </Wrapper>
    </HeaderStyle>
  )
}