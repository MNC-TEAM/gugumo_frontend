import useSWR from "swr";
import { fetcher } from "../fetch/fetcher";
import { MypageDataType } from "@/types/mypage";

export function useMember(){

    const {
        data,
        isLoading,
        isValidating,
        mutate
    } = useSWR<MypageDataType>(
        "/api/member",
        fetcher,
        {
            // revalidateIfStale: false,
            revalidateOnFocus: false, // 화면을 보고있을경우 다시 데이터를 가져옴 false
            revalidateOnReconnect: false 
        }
    );

    return {
        data,
        isLoading,
        isValidating
    }

}