import * as S from "./AuthBtn.style";
import {AuthBtnType} from "./AuthBtn.stories";
export default function AuthBtn({active,onClick,children} : AuthBtnType) {
  return (
    <S.Button $active={active} onClick={onClick}>{children}</S.Button>
  )
}