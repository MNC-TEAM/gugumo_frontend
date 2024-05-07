import { useRouter } from "next/navigation";
import * as S from "./Prev.style";

export default function Prev() {

    const router = useRouter();

    return (
        <S.Button onClick={()=>router.back()}><img src="/asset/icon/prev_arrow.svg" alt="뒤로가기" /></S.Button>
    )

}
