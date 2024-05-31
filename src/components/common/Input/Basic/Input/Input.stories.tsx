import type { Meta, StoryObj } from '@storybook/react';
import Input from "./Input";
import AuthBtn from '@/app/components/common/Input/Basic/AuthBtn/AuthBtn';

export interface InputType {
  /**
   * Input창을 넣습니다.
   */
  children : React.ReactNode;
  /**
   * 에러 메세지를 넣어줍니다.
   */
  error? : string;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Input> = {
  title: 'Layout/Basic/Input',
  component: Input,
  tags : ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function DefaultInput() {
  return (
    <input type="text" placeholder='내용을 입력해주세요.'/>
  )
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 틀: Story = {
  args : {}
}

export const 기본: Story = {
  args : {
    children : <DefaultInput/>
  }
}

export const 에러메세지: Story = {
  args : {
    children : <DefaultInput/>,
    error : "에러 메세지"
  }
}


function AuthInput() {
  return (
    <>
      <input type="text" placeholder='내용을 입력해주세요.'/>
      <AuthBtn onClick={()=>{}}>인증요청</AuthBtn>
    </>
  )
}

export const 인증: Story = {
  args : {
    children : <AuthInput/>,
  }
}

function AuthComplete() {
  return (
    <>
      <input type="text" placeholder='내용을 입력해주세요.'/>
      <AuthBtn active={true} onClick={()=>{}}>인증완료</AuthBtn>
    </>
  )
}

export const 인증완료: Story = {
  args : {
    children : <AuthComplete/>,
  }
}

export const 인증에러: Story = {
  args : {
    children : <AuthInput/>,
    error : "에러 메세지"
  }
}