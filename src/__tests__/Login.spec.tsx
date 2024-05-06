import '@testing-library/jest-dom';
import Login from '@/app/components/auth/Modal/Login';
import modal, { onLogin } from '@/store/features/modal/modal';
import { theme } from '@/styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent } from '@storybook/test';
import {render,screen, waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// store 생성
const store = configureStore({
    reducer : {
        modal : modal
    }
})

describe("로그인 테스트",()=>{

    beforeEach( async ()=>{

        // given - 로그인 화면을 가져와줍니다.
        
        const {getByText} = render(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </ThemeProvider>
        );

        // dispatch을 사용해서 login을 true로 수정
        store.dispatch(onLogin());

        const state = store.getState().modal; // modal의 state을 가져옴
        expect(state.login).toBe(true); //true 인지 비교

        //모달창이 열릴때 까지 기다려준다
        await waitFor(() => expect(getByText('로그인')).toBeInTheDocument());
        
    })

    test("이메일, 비밀번호를 입력하고 회원이 존재하지 않으면 에러를 발생합니다.",async ()=>{

        // when - 로그인을 시도합니다.
        

        // then - 로그인에 실패합니다.

    });

    test("이메일, 비밀번호를 입력하여 회원이 존재하면 로그인 합니다.", async ()=>{

        // when - 로그인을 시도합니다.

        const loginButton = screen.getByRole('button',{name : '로그인 하기'}); // 로그인버튼을 가져옵니다.
        const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.'); // 이메일 Input 가져옵니다.
        const passwordInput = screen.getByPlaceholderText('비밀번호를 입력하세요.'); // 비밀번호 Input을 가져옵니다.

        fireEvent.change(emailInput,({target : {value : "test@test.com"}})); // 이메일을 입력합니다.
        fireEvent.change(passwordInput,({target : {value : "password"}})); // 비밀번호를 입력합니다.

        fireEvent.click(loginButton); // 버튼을 클릭합니다.

        // then - 로그인에 성공하였습니다.
        await waitFor(()=>{
            const state = store.getState().modal;
            expect(state.login).toEqual(false);
        });

    });

})