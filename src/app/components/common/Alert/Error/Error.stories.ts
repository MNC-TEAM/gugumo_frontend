import { Meta, StoryObj } from "@storybook/react";
import Error from "./Error";

export interface ErrorType{
    errorMessage : string
}

const meta : Meta<typeof Error> = {
    title: 'Layout/Alert/Error',
    component: Error,
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
        errorMessage : "에레메세지를 출력합니다"
    }
}