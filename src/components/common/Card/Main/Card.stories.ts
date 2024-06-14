import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

export interface CardType {
  /**
   *  스켈레톤
  */
  skeleton? : boolean
  /**
   * 게시글 번호를 입력합니다.
  */
  postId : number
  /**
   * 모집중, 모집완료 등 상태창을 넣습니다.
  */
  status : string
  /**
   * 구기종목의 타입을 지정합니다.
  */
  gameType : string
  /**
   * 지역을 지정합니다.
  */
  location : string
  /**
   * 게시글 제목을 입력합니다.
  */
  title : string
  /**
   * 요일을 선택합니다.
  */
  meetingDateTime : string
  /**
   * 멤버수를 지정합니다.
  */
  meetingMemberNum : number
  /**
   * 날짜를 밀리초형식으로 입력합니다.
  */
  meetingDeadline : string
  /**
   * 북마크상태를 가져옵니다. 
  */
  bookmarkStatus : boolean
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Card> = {
  title: 'Layout/Card/Main',
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

export const Default: Story = {
  args : {
    postId : 1,
    status : "RECRUIT",
    gameType : "BADMINTON",
    location : "INCHEON",
    title : "배트민턴 같이 치실분 구합니다.",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : "2024-05-11",
    bookmarkStatus : false
  }
}

export const END: Story = {
  args : {
    postId : 1,
    status : "END",
    gameType : "BADMINTON",
    location : "INCHEON",
    title : "배트민턴 같이 치실분 구합니다.",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : "2024-05-11",
    bookmarkStatus : false
  }
}

export const BookMarkOff: Story = {
  args : {
    postId : 1,
    status : "RECRUIT",
    gameType : "BADMINTON",
    location : "INCHEON",
    title : "배트민턴 같이 치실분 구합니다.",
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
    title : "배트민턴 같이 치실분 구합니다.",
    meetingDateTime : "09",
    meetingMemberNum : 2,
    meetingDeadline : "2024-05-11",
    bookmarkStatus : true
  }
}