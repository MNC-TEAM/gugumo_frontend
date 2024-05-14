import * as S from "../style";
import WhiteBtn from "../../../common/Button/WhiteBtn";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";

export default function Nickname() {

  const user = useAppSelector(state=>state.user);
  const {register,handleSubmit} = useForm();

  const confirmHanlder = ()=>{
    alert('준비중 입니다.');
  }

  const submitHanlder = (event : any)=>{
    const {nickname} = event;

    axios.patch('/api/member/mypage',{
      nickname
    },{
      headers : {
        Authorization : user
      }
    })
    .then(res=>{
      const {} = res.data;
      console.log(res.data);
    })
    .catch(()=>{
      console.log('서버에러');
    })

  }

  return (
    <S.Form onSubmit={handleSubmit(submitHanlder)}>
        <S.Layout>
            <h4>개인정보 변경</h4>
            <S.InputLayout>
                <p>닉네임</p>
                <div>
                    <input type="text" placeholder="닉네임을 입력하세요." {...register('nickname')}/>
                    <button type="button" onClick={confirmHanlder}>중복확인</button>
                </div>
            </S.InputLayout>
        </S.Layout>

        <WhiteBtn type="submit" align="center">개인정보 수정</WhiteBtn>
    </S.Form>
  )
}
