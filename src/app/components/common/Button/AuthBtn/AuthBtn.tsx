import { AuthBtnType } from "./AuthBtn.stories";
import * as S from "./AuthBtn.style";

export default function AuthBtn({active,children} : AuthBtnType) {
  return (
    <S.Button active={active}>{children}</S.Button>
  )
}
