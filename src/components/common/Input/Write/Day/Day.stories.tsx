import Day from '@components/common/Input/Write/Day/Day';
import type { Meta, StoryObj } from '@storybook/react';
import { MouseEventHandler } from 'react';

export interface DayType {
  /**
   * onClick Handler
   */
  onClick : MouseEventHandler<HTMLDivElement>
  /**
   * 활성화
   */
  $active : boolean
  /**
   * 내용을 입력합니다.
   */
  children : React.ReactNode
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Day> = {
  title: 'Layout/Write/Day',
  component: Day,
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
    $active : false,
    children : "월"
  }
}

export const Active: Story = {
  args : {
    $active : true,
    children : "월"
  }
}