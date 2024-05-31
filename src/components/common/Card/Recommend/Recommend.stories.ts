import type { Meta, StoryObj } from '@storybook/react';
import Recommend from './Recommend';

export interface RecommendType {}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Recommend> = {
  title: 'Layout/Card/Recommend',
  component: Recommend,
  tags : ['autodocs'],
  parameters : {
    layout : "centered",
    nextjs : {
      appDirectory: true,
    }
  },
  argTypes : {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    postId : 1,
    status : "RECRUIT",
    gameType : "BADMINTON",
    location : "INCHEON",
    title : "인천에서 배드민턴 같이 치실 분 구합니다!",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : "2024-05-11",
    bookmarkStatus : false
  }
}

export const BookMarkOn: Story = {
  args : {
    postId : 1,
    status : "RECRUIT",
    gameType : "BADMINTON",
    location : "INCHEON",
    title : "인천에서 배드민턴 같이 치실 분 구합니다!",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : "2024-05-11",
    bookmarkStatus : true
  }
}