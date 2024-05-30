import { DayType } from "@/app/components/common/Input/Write/Day/Day.stories";
import * as S from "./Day.style";

export default function Day({onClick,$active,children} : DayType) {
  return (
    <S.Div onClick={onClick} $active={$active}>{children}</S.Div>
  )
}
