import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';

export interface AlertType {
    children : React.ReactNode
}

const meta : Meta<typeof Alert> = {
  title: 'Core/Button/Alert',
  component: Alert,
  parameters : {
    layout : "centered",
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args : {
        children : "확인"
    }
}