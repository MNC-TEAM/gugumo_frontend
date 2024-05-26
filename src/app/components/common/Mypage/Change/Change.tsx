import * as S from "./Change.style";
import {ChangeType} from "./Change.stories";

export default function Change({onClick,children} : ChangeType) {
  return (
    <S.Button onClick={onClick}>{children}</S.Button>
  )
}
