import type { Meta, StoryObj } from '@storybook/react';
import OpenTalk from './OpenTalk';

const meta : Meta<typeof OpenTalk> = {
  title: 'Core/Button/OpenTalk',
  component: OpenTalk,
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}