import { PrimaryType } from "./Primary.stories";
import * as S from "./Primary.style";

export default function Primary({children,type,onClick,...rest} : PrimaryType) {
  return (
    <S.Button onClick={onClick} type={type} {...rest}>{children}</S.Button>
  )
}
