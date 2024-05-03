import type { Meta, StoryObj } from '@storybook/react';
import WhiteBtn from '.';

export interface WhiteBtnType {
  edit? : boolean;
  href? : string;
  type? : "button" | "submit" | "reset";
  children? : React.ReactNode;
  align : "left" | "center" | "right";
}

const meta : Meta<typeof WhiteBtn> = {
  title: 'Core/Button/WhiteBtn',
  component: WhiteBtn,
  tags : ["autodocs"],
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Write: Story = {
  args : {
    edit : true,
    children : "새글 작성"
  }
}

export const List: Story = {
  args : {
    children : "목록보기"
  }
}

export const Upload: Story = {
  args : {
    children : "업로드 하기"
  }
}