import Location from '@components/common/Button/Location';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

export interface LocationTypes {
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

const meta : Meta<typeof Location> = {
  title: 'Core/Button/Location',
  component: Location,
  parameters : {
    layout : "centered"
  },
  tags : ['autodocs'],
  argTypes : {
    onClick : { control: undefined },
  },
  args : {
    onClick : fn()
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    active : false,
    label : "버튼"
  }
}

export const Active: Story = {
  args : {
    active : true,
    label : "버튼"
  }
}