import * as S from "./AuthBtn.style";
import {AuthBtnType} from "./AuthBtn.stories";
export default function AuthBtn({type,active,onClick,children} : AuthBtnType) {
  return (
    <S.Button type={type} $active={active} onClick={onClick}>{children}</S.Button>
  )
}