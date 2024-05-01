import type { Meta, StoryObj } from '@storybook/react';
import Bookmark from '.';

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