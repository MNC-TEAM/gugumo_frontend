"use client"

import { NotFoundStyle } from "@components/page/notfound/style";
import { GlobalStyle } from "@styles/global";
import { theme } from "@styles/theme";
import { useRouter } from "next/navigation";
import styled, { ThemeProvider } from "styled-components";

const Flex = styled.div`
  display: flex;
`;

export default function NotFound() {

  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <NotFoundStyle>
        <img src="/asset/image/notfound.png" alt="에러로고" />
        <h1>404 ERROR</h1>
        <dl>
          <dt>
            죄송합니다. 현재 페이지를 찾을 수 없습니다.
          </dt>
          <dd>
            존재하지 않는 주소를 입력하셨거나 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다. 
          </dd>
        </dl>
        <Flex>
          <button onClick={()=>router.back()}>이전으로</button>
          <button onClick={()=>router.push('/')}>메인으로</button>
        </Flex>
      </NotFoundStyle>
    </ThemeProvider>
  )
}
