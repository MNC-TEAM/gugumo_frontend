import { Flex,LinkStyle } from "./style";

export default function Paging() {
  return (
    <Flex>
        <LinkStyle href={"1"} $active={true} >1</LinkStyle>
        <LinkStyle href={"2"}>2</LinkStyle>
        <LinkStyle href={"3"}>3</LinkStyle>
        <LinkStyle href={"4"}>4</LinkStyle>
        <LinkStyle href={"5"}>5</LinkStyle>
    </Flex>
  )
}
