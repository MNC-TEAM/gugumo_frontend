import { PrimaryType } from "./Primary.stories";
import * as S from "./Primary.style";

export default function Primary({children} : PrimaryType) {
  return (
    <S.Button>{children}</S.Button>
  )
}
