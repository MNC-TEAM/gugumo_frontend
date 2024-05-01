import { AlertType } from "./Alert.stories"
import * as S from "./Alert.style"

export default function Alert({children} : AlertType) {
  return (
    <S.Button>{children}</S.Button>
  )
}
