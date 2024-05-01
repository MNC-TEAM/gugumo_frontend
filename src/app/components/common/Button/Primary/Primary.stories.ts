import type { Meta, StoryObj } from '@storybook/react';
import Primary from './Primary';

export interface PrimaryType {
  type?: "button" | "submit" | "reset",
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