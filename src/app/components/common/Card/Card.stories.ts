import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags : ['autodocs'],
  parameters : {
    layout : "centered",
    nextjs : {
      appDirectory: true,
    }
  },
  argTypes : {
    meetingDeadline : {
      control : {type : "date"}
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BookMarkOff: Story = {
  args : {
    postId : 1,
    status : "모집중",
    gameType : "배드민턴",
    location : "인천",
    title : "배트민턴 같이 치실분 구합니다.",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : Date.now(),
    bookmarkStatus : false
  }
}

export const BookMarkOn: Story = {
  args : {
    postId : 1,
    status : "모집중",
    gameType : "배드민턴",
    location : "인천",
    title : "배트민턴 같이 치실분 구합니다.",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : Date.now(),
    bookmarkStatus : true
  }
}