import { DetailDataType } from "@/types/meeting";
import * as S from "./detail.style";
import { GAMETYPE, LOCATION, MEETINGTYPE } from "@constant/meetingQuery";
import moment from "moment";

interface DetailTopStateT {
    isLoading : boolean;
    detail? : DetailDataType;
}

export default function DetailGrid({isLoading,detail} : DetailTopStateT) {
  return (
    <S.Grid>
        <S.Col>
            <h4>모집형식</h4>
            {
                isLoading ? <S.ColSkeletonP/>
                : <p>{ detail ? MEETINGTYPE[detail.data.meetingType] : ""}</p>
            }
        </S.Col>
        <S.Col>
            <h4>지역</h4>
            {
                isLoading ? <S.ColSkeletonP/>
                : <p>{ detail ? LOCATION[detail.data.location] : "" }</p>
            }
        </S.Col>
        <S.Col>
            <h4>구기종목</h4>
            {
                isLoading ? <S.ColSkeletonP/>
                : <p>{ detail ? GAMETYPE[detail.data.gameType] : "" }</p>
            }
        </S.Col>
        {
            detail?.data?.meetingType === "LONG" 
            ?
            <>
                <S.Col>
                    <h4>시간대</h4>
                    {
                        isLoading ? <S.ColSkeletonP/>
                        : <p>{detail.data.meetingTime}</p>
                    }
                </S.Col>
                <S.Col>
                    <h4>모임 요일</h4>
                    {
                        isLoading ? <S.ColSkeletonP/>
                        : <p>{detail.data.meetingDays.split(';')}</p>
                    }
                </S.Col>
            </>
            :
            <S.Col>
                <h4>모임 날짜</h4>
                {
                    isLoading ? <S.ColSkeletonP/>
                    : <p>{moment(detail?.data.meetingDateTime).format('YYYY-MM-DD')}</p>
                }
            </S.Col>
        }
        <S.Col>
            <h4>모집인원</h4>
            {
                isLoading ? <S.ColSkeletonP/>
                : <p>{detail?.data.meetingMemberNum} 명</p>
            }
        </S.Col>
        <S.Col>
            <h4>모집마감</h4>
            {
                isLoading ? <S.ColSkeletonP/>
                : <p>{detail?.data.meetingDeadline}</p>
            }
        </S.Col>
        <S.Col $open={true}>
            <h4>오픈카톡 주소</h4>
            {
                isLoading ? <S.OpenTalkSkeleton/>
                :
                <S.OpenTalk href={detail?.data.openKakao} target="_blank">
                    오픈톡 참여 <img src="/asset/icon/link.svg" alt="" />
                </S.OpenTalk>
            }
        </S.Col>
    </S.Grid>
  )
}
