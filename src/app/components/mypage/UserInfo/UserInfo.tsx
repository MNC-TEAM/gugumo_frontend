import * as S from "./style";

export default function UserInfo() {
  return (
    <S.UserFlex>
        <S.User>
            <div></div>
            <button><img src="/asset/icon/edit.svg" alt="편집하기" /> 편집하기</button>
        </S.User>
        <S.UserName>
            닉네임
            <p>abc1234@naver.com</p>
        </S.UserName>
    </S.UserFlex>
  )
}