import useSWR from "swr";
import { fetcher } from "../fetch/fetcher";
import { CommentDataType } from "@/types/meeting";

export function useCommentList(postId : string){

    const {
        data,
        isLoading,
        isValidating,
        mutate
    } = useSWR<CommentDataType>(
        `/api/meeting/comment/${postId}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false, // 화면을 보고있을경우 다시 데이터를 가져옴 false
            revalidateOnReconnect: false 
        }
    );
    
    return {
        data,

        isLoading,
        isValidating,
    }

}