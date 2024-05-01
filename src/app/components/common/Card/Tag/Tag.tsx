import { TagType } from "./Tag.stories";
import { TagStyle } from "./Tag.style";

export default function Tag({color,children} : TagType) {
  return (
    <TagStyle color={color}>{children}</TagStyle>
  )
}
