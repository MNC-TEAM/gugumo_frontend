import Link from "next/link";
import { Flex } from "./style";

export default function Paging() {
  return (
    <Flex>
        <Link href={"1"}>1</Link>
        <Link href={"2"}>2</Link>
        <Link href={"3"}>3</Link>
        <Link href={"4"}>4</Link>
        <Link href={"5"}>5</Link>
    </Flex>
  )
}
