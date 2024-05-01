import { PrimaryType } from "./Primary.stories";
import * as S from "./Primary.style";

export default function Primary({children,type,...rest} : PrimaryType) {
  return (
    <S.Button type={type} {...rest}>{children}</S.Button>
  )
}
