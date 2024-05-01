import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters : {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}