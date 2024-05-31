import { Meta, StoryObj } from "@storybook/react";
import Change from "./Change";
import { MouseEventHandler } from "react";

export interface ChangeType{
    children : React.ReactNode
    onClick? : MouseEventHandler<HTMLButtonElement>
}

const meta : Meta<typeof Change> = {
    title: 'Layout/Mypage/Change',
    component: Change,
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
        children : "변경"
    }
}