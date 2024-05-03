import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';
import { fn } from '@storybook/test';

export interface TagTypes {
  /**
   * 버튼안에 들어갈 텍스트를 적습니다.
   */
  label : string,
  /**
   * 버튼을 클릭할시 발생하는 이벤트를 넣습니다.
  */
  onClick? : React.MouseEventHandler<HTMLButtonElement>
  /**
   * 버튼 활성화
  */
  active : boolean
}

const meta : Meta<typeof Tag> = {
  title: 'Core/Button/Tag',
  component: Tag,
  parameters : {
    layout : "centered"
  },
  tags : ['autodocs'],
  argTypes : {
    onClick : { control: 'none' },
    active : { control : "none"}
  },
  args : {
    onClick : fn()
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    label : "버튼"
  }
}

export const Hover: Story = {
  args : {
    active : true,
    label : "버튼"
  }
}