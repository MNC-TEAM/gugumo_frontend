import type { Meta, StoryObj } from '@storybook/react';
import White from './White';

export interface WhiteType {
  type? : "button" | "submit" | "reset";
  onClick? : React.MouseEventHandler<HTMLButtonElement>
  children? : React.ReactNode;
}

const meta : Meta<typeof White> = {
  title: 'Core/Button/White',
  component: White,
  tags : ["autodocs"],
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    children : "목록보기"
  }
}