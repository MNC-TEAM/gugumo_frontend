import { useState } from "react";
import * as S from "./Alarm.style";
import Image from "next/image";

export default function Alarm() {

    const [isopen,setIsOpen] = useState(false);

  return (
    <S.Alarm>
        <Image onClick={()=>(setIsOpen(!isopen))} src="/asset/icon/bell.svg" alt="알림창" width={36} height={36}/>
        {
            isopen &&
            <S.AlarmBox>
                <S.AlarmBoxFlex>
                    <h4>알림</h4>
                    <button type="button">모두읽음</button>
                </S.AlarmBoxFlex>
                <S.AlarmBoxDay>
                    <p>6월 3일</p>
                    <S.AlarmBoxList>
                    <li>
                        <span>댓글</span>
                        <p>내용입니다...내용입니다...내용입니다...</p>
                        <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                    <li>
                        <span>댓글</span>
                        <p>내용입니다...내용입니다...내용입니다...</p>
                        <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                    </S.AlarmBoxList>
                </S.AlarmBoxDay>
                <S.AlarmBoxDay>
                    <p>6월 3일</p>
                    <S.AlarmBoxList $status={true}>
                    <li>
                        <span>댓글</span>
                        <p>내용입니다...내용입니다...내용입니다...</p>
                        <button type="button"><img src="/asset/icon/remove.svg" alt="삭제 아이콘" /></button>
                    </li>
                    </S.AlarmBoxList>
                </S.AlarmBoxDay>
            </S.AlarmBox>
        }
    </S.Alarm>
  )
}
