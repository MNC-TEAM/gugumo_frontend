import Sign from '@/app/components/auth/Sign';
import modal, { onSignup } from '@/store/features/modal/modal';
import { theme } from '@/styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent } from '@storybook/test';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// store 생성
const store = configureStore({
    reducer : {
        modal : modal
    }
})

describe("회원가입 테스트",()=>{

    beforeEach( async ()=>{

        // given - 화면에 회원가입 모달창을 그려줍니다.

        const {getByText} = render(
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Sign/>
                </Provider>
            </ThemeProvider>
        );

        // dispatch을 이용해서 모달창을 true로 변동시켜줍니다.
        store.dispatch(onSignup());

        const state = store.getState().modal;
        expect(state.signup).toEqual(true); // modal창이 열렸는지 확인

        await waitFor(()=> expect(getByText("회원가입")).toBeInTheDocument());

    });

    test("이미 존재하는 닉네임이 있을경우 에러를 발생시킵니다.",()=>{

        // when - 회원가입을 시도 합니다.

        const nameInput = screen.getByPlaceholderText('닉네임을 입력하세요');
        const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
        const passwordInput = screen.getByPlaceholderText('비밀번호');
        const confirmPasswordInput = screen.getByPlaceholderText('비밀번호 확인');

        const signButton = screen.getByRole('button',{name : "회원가입 하기"});

        fireEvent.change(nameInput,({target : {value : "테스트"}}));
        fireEvent.change(emailInput,({target : {value : "test@test.com"}}));
        fireEvent.change(passwordInput,({target : {value : "password"}}));
        fireEvent.change(confirmPasswordInput,({target : {value : "password"}}));

        fireEvent.click(signButton); // 회원가입 버튼을 클릭합니다.

        // then - 이미 존재하는 닉네임이 있습니다.
        
    });

    test("이미 존재하는 이메일이 있을경우 에러를 발생시킵니다.",()=>{

        // when - 회원가입을 시도 합니다.

        const nameInput = screen.getByPlaceholderText('닉네임을 입력하세요');
        const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
        const passwordInput = screen.getByPlaceholderText('비밀번호');
        const confirmPasswordInput = screen.getByPlaceholderText('비밀번호 확인');

        const signButton = screen.getByRole('button',{name : "회원가입 하기"});

        fireEvent.change(nameInput,({target : {value : "테스트"}}));
        fireEvent.change(emailInput,({target : {value : "test@test.com"}}));
        fireEvent.change(passwordInput,({target : {value : "password"}}));
        fireEvent.change(confirmPasswordInput,({target : {value : "password"}}));

        fireEvent.click(signButton); // 회원가입 버튼을 클릭합니다.

        // then - 이미 존재하는 이메일이 있습니다.
        
    });

    test("회원가입시 비밀번호가 다를경우 에러를 발생시킵니다.", async ()=>{

        // when - 회원가입을 시도 합니다.

        const nameInput = screen.getByPlaceholderText('닉네임을 입력하세요');
        const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
        const passwordInput = screen.getByPlaceholderText('비밀번호');
        const confirmPasswordInput = screen.getByPlaceholderText('비밀번호 확인');

        const signButton = screen.getByRole('button',{name : "회원가입 하기"});

        fireEvent.change(nameInput,({target : {value : "테스트"}}));
        fireEvent.change(emailInput,({target : {value : "test@test.com"}}));
        fireEvent.change(passwordInput,({target : {value : "password"}}));
        fireEvent.change(confirmPasswordInput,({target : {value : "password!"}}));

        fireEvent.click(signButton); // 회원가입 버튼을 클릭합니다.

        // then - 서로 비밀번호가 다릅니다.

        const errorMessage = await screen.findByTestId('error-message'); // data-testid 값을 이용해서 가져옵니다.
        expect(errorMessage).toBeInTheDocument();

    });

    test("회원가입을 성공 했을경우를 테스트 합니다.",()=>{

        // when - 회원가입을 시도 합니다.

        const nameInput = screen.getByPlaceholderText('닉네임을 입력하세요');
        const emailInput = screen.getByPlaceholderText('이메일을 입력하세요.');
        const passwordInput = screen.getByPlaceholderText('비밀번호');
        const confirmPasswordInput = screen.getByPlaceholderText('비밀번호 확인');

        const signButton = screen.getByRole('button',{name : "회원가입 하기"});

        fireEvent.change(nameInput,({target : {value : "테스트"}}));
        fireEvent.change(emailInput,({target : {value : "test@test.com"}}));
        fireEvent.change(passwordInput,({target : {value : "password"}}));
        fireEvent.change(confirmPasswordInput,({target : {value : "password"}}));

        fireEvent.click(signButton); // 회원가입 버튼을 클릭합니다.
        
        // then - 회원가입에 성공하였습니다.

    });

});