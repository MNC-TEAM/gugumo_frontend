import { MypageType } from "@/types/mypage";
import * as S from "./style";
import User from "@components/common/User/User";

export default function UserInfo({nickname} : {mypage : MypageType,nickname : string}) {

  const imageChangeHanlder = ()=>{
    alert('회원 이미지는 준비중에 있습니다.');
  }

  return (
    <S.UserFlex>
        <S.UserBox>
          <User/>
        </S.UserBox>
        <S.UserName>
            닉네임
            <p>{nickname}</p>
        </S.UserName>
    </S.UserFlex>
  )
}