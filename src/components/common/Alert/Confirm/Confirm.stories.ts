import { Meta, StoryObj } from "@storybook/react";
import Confirm from "./Confirm";

export interface ConfirmType{
    confirmMessage : string
}

const meta : Meta<typeof Confirm> = {
    title: 'Layout/Alert/Confirm',
    component: Confirm,
    tags : ["autodocs"],
    parameters : {
        layout : "centered"
    }
};
  
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args : {
        confirmMessage : "댓글을 삭제 하시겠습니까?"
    }
}