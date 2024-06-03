import useSWR from "swr";
import { Datum, RecommendType } from "@/types/recommend";
import { fetcher } from "../fetch/fetcher";
import { useEffect, useState } from "react";

export function useRecommend(){

    const [recommend,setRecommend] = useState<Datum[]>([]);

    const {
        data,
        isLoading,
        isValidating,
        mutate
    } = useSWR<RecommendType>(
        '/api/meeting/recommend',
        fetcher,
        {
            revalidateOnFocus : false, // 화면을 보고있을경우 다시 데이터를 가져옴 false
            revalidateOnReconnect: false
        }
    );

    useEffect(()=>{
        if(!data) return;
        setRecommend(data.data);
    },[data]);

    return {
        recommend,
        isLoading,
        isValidating,
        mutate
    }

}