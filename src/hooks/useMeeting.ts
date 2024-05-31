import useSWR from 'swr';
import { fetcher } from '../fetch/meeting';
import { DetailDataType, MeetingDataType } from '@/types/meeting';

export function useList(...arg : any){

    const {
        data,
        isLoading,
        isValidating,
        mutate
    } = useSWR<MeetingDataType>(
        [
            "/api/meeting",...arg
        ]
        ,([url])=>fetcher(url,...arg)
        ,{
            revalidateOnFocus : false, // 화면을 보고있을경우 다시 데이터를 가져옴 false
        }
    );

    return {
        data,
        isLoading,
        isValidating,
    }

}

export function useDetail(postid : string){

    const {
        data : detail,
        isLoading,
        isValidating,
        mutate
    } = useSWR<DetailDataType>(
        `/api/meeting/${postid}`,
        fetcher,
        {
            revalidateOnFocus : false, // 화면을 보고있을경우 다시 데이터를 가져옴 false
        }
    );

    return {
        detail,
        isLoading,
        isValidating,
    }

}