import * as S from "./OpenTalk.style";
import LinkSvg from "@asset/icon/link.svg";

export default function OpenTalk({children} : {children : React.ReactNode}) {
  return (
    <S.Link href="/" target="_blank">
      {children}
      <LinkSvg/>
    </S.Link>
  )
}
