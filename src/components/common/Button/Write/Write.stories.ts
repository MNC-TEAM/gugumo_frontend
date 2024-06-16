import type { Meta, StoryObj } from '@storybook/react';
import Write from "./Write";

export interface WriteType {
  children : React.ReactNode;
  onClick? : any;
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
    children : "새글 작성"
  }
}