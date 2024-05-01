import type { Meta, StoryObj } from '@storybook/react';
import AuthBtn from './AuthBtn';

export interface AuthBtnProps {
  active? : boolean
}

export interface AuthBtnType extends AuthBtnProps {
  children : React.ReactNode
}

const meta : Meta<typeof AuthBtn> = {
  title: 'Core/Button/AuthBtn',
  component: AuthBtn,
  tags : ["autodocs"],
  parameters : {
    layout : "centered"
  },
  args : {
    active : false,
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    active : false,
    children : "인증요청"
  }
}

export const Active: Story = {
  args : {
    active : true,
    children : "인증요청됨"
  }
}