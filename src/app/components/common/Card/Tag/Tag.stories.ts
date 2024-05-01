import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

export interface TagProps {
    color : "recruit" | "recruitEnd" | "ball" | "region"
}

export interface TagType extends TagProps{
    children : React.ReactNode
}

const meta : Meta<typeof Tag> = {
  title: 'Core/Tag',
  component: Tag,
  parameters : {
    layout : "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Recruit: Story = {
  args : {
    color : "recruit",
    children : "모집중"
  }
}
export const RecruitEnd: Story = {
  args : {
    color : "recruitEnd",
    children : "모집완료"
  }
}
export const Ball: Story = {
  args : {
    color : "ball",
    children : "배드민턴"
  }
}
export const Region: Story = {
  args : {
    color : "region",
    children : "인천"
  }
}