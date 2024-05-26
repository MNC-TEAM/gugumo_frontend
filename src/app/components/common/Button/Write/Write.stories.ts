import type { Meta, StoryObj } from '@storybook/react';
import Write from "./Write";

export interface WriteType {
  href : string
  children : React.ReactNode
}

const meta : Meta<typeof Write> = {
  title: 'Core/Button/Write',
  component: Write,
  tags : ["autodocs"],
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {
    href : "",
    children : "새글 작성"
  }
}