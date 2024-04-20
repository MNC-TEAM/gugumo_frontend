import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters : {
    layout : "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args : {}
}