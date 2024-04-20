import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';
import { fn } from '@storybook/test';

const meta : Meta<typeof Tag> = {
  title: 'Button/Tag',
  component: Tag,
  parameters : {
    layout : "centered"
  },
  tags : ['autodocs'],
  argTypes : {
    onClick : { control: 'none' }
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