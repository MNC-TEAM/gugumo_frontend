import { WriteType } from "@components/common/Button/Write/Write.stories";
import * as S from "./Write.style";
import WriteSVG from "@asset/icon/write.svg";

export default function Write({children,href}:WriteType) {
  return (
    <S.Button href={href}>
      <WriteSVG/>
      {children}
    </S.Button>
  )
}
