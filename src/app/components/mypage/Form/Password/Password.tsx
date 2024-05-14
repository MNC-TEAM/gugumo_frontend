import * as S from "../style";
import WhiteBtn from "../../../common/Button/WhiteBtn";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAppSelector } from "@/store/hook";

export default function Password() {

    const user = useAppSelector(state=>state.user);
    const {register,handleSubmit} = useForm();

    const submithanlder = (event : any)=>{
        const {password,confirmPassword} = event;

        axios.patch('/api/member/mypage',{
            password,
            confirmPassword
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
        });

    }

  return (
    <S.Form onSubmit={handleSubmit(submithanlder)}>
        <S.Layout>
            <h4>비밀번호 설정</h4>
            <S.InputFlex>
                <S.InputLayout>
                    <label htmlFor="password">새 비밀번호</label>
                    <div>
                        <input id="password" type="password" placeholder="비밀번호를 입력해주세요." {...register('password')}/>
                    </div>
                </S.InputLayout>
                <S.InputLayout>
                    <label htmlFor="confirmPassword">새 비밀번호 확인</label>
                    <div>
                        <input id="confirmPassword" type="password" placeholder="입력한 비밀번호를 입력해주세요." {...register('confirmPassword')}/>
                    </div>
                </S.InputLayout>
            </S.InputFlex>
        </S.Layout>
        <WhiteBtn type="submit" align="center">비밀번호 수정</WhiteBtn>
    </S.Form>
  )
}
