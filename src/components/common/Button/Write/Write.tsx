import { WriteType } from "@components/common/Button/Write/Write.stories";
import * as S from "./Write.style";
import WriteSVG from "@asset/icon/write.svg";

export default function Write({children,onClick}:WriteType) {
  return (
    <S.Button onClick={onClick}>
      <WriteSVG/>
      {children}
    </S.Button>
  )
}
