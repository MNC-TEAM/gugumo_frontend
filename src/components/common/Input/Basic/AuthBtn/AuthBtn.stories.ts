import AuthBtn from '@/app/components/common/Input/Basic/AuthBtn/AuthBtn';
import type { Meta, StoryObj } from '@storybook/react';
import { MouseEventHandler } from 'react';

export interface AuthBtnType{
    type?: "button" | "submit" | "reset";
    children : React.ReactNode;
    onClick? : MouseEventHandler<HTMLButtonElement>;
    active? : boolean
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof AuthBtn> = {
  title: 'Layout/Basic/AuthBtn',
  component: AuthBtn,
  tags : ["autodocs"],
  parameters : {
    layout : "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args : {
    children : "인증요청"
  }
}

export const Active: Story = {
  args : {
    children : "인증완료",
    active : true
  }
}