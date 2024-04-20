import type { Meta, StoryObj } from '@storybook/react';
import Write from '.';

const meta : Meta<typeof Write> = {
  title: 'Button/Write',
  component: Write,
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}