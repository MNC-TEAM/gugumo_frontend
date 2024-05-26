import type { Meta, StoryObj } from '@storybook/react';
import Primary from './Primary';
import { MouseEventHandler } from 'react';

export interface PrimaryType {
  /**
   * button의 타입을 지정합니다.
   */
  type?: "button" | "submit" | "reset",
  /**
   * onClick Handler
   */
  onClick? : MouseEventHandler<HTMLButtonElement>,
  /**
   * 버튼의 내용을 입력합니다.
   */
  children : React.ReactNode
}

const meta : Meta<typeof Primary> = {
  title: 'Core/Button/Primary',
  component: Primary,
  parameters : {
    layout : "centered",
  },
  tags : ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Login: Story = {
  args :{
    children : "로그인"
  }
}

export const Signup: Story = {
  args :{
    children : "회원가입"
  }
}