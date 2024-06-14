import * as S from "./style";
import User from "@components/common/User/User";
import { UserSkeleton } from "@components/skeleton/skeleton.styled";

export default function UserInfo({isLoading,nickname} : {isLoading :boolean,nickname : string}) {

  return (
    <S.UserFlex>
      {
        isLoading 
        ? 
        <UserSkeleton/>
        :
        <>
          <S.UserBox>
            <User/>
          </S.UserBox>
          <S.UserName>
              닉네임
              <p>{nickname}</p>
          </S.UserName>
        </>
      }
    </S.UserFlex>
  )

}