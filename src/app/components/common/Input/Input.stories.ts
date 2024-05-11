import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Input> = {
  title: 'Layout/Input',
  component: Input,
  parameters : {
    layout : "centered"
  },
  args : {
    placeholder : "내용을 입력하세요",
    error : "에러 메세지 입니다."
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args : {}
}