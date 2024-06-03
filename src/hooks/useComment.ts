import useSWR from "swr";
import { fetcher } from "../fetch/fetcher";
import { CommentDataType, Datum } from "@/types/meeting";
import { useEffect, useState } from "react";

export function useCommentList(postId : string){

    const [commentLength,setCommentLength] = useState(0);
    const [parentComment,setParentComment] = useState<Datum[]>([]);
    const [replyComment,setReplyComment] = useState<Datum[]>([]);

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

    
    useEffect(()=>{

        if(!data) return;

        const parent = data.data.filter((el)=>!el.parentCommentId);
        const reply = data.data.filter((el)=>el.parentCommentId);

        setParentComment(parent);
        setReplyComment(reply);

        setCommentLength(data.data.length);

    },[data]);

    
    return {
        commentLength,
        parentComment,
        replyComment,
        isLoading,
        isValidating,
        mutate
    }

}