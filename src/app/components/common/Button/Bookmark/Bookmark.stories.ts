import type { Meta, StoryObj } from '@storybook/react';
import Bookmark from '.';

export interface BookmarkType {
  /**
   * 게시글의 번호를 입력합니다.
   */
  postid : number
  /**
   * 게시글의 북마크상태를 가져옵니다.
   */
  status : boolean
  /**
   * 북마크의 갯수를 가져옵니다.
   */
  bookmarkCount? : number
  /**
   * 북마크의 갯수를 변동할 state을 가져옵니다.
   */
  setBookmarkCount? : any
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Bookmark> = {
  title: 'Core/Button/Bookmark',
  component: Bookmark,
  tags : ["autodocs"],
  parameters : {
    layout : "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const BookmarkOff: Story = {
    args : {
      status : false
    }
}

export const BookmarkOn: Story = {
    args : {
      status : true
    }
}