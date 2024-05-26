import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta : Meta<typeof Input> = {
    title: 'Layout/Mypage/Input',
    component: Input,
    tags : ["autodocs"],
};
  
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const 틀: Story = {
    args : {}
}

function Text() {
    return(
        <input type="text" placeholder='작성중'/>
    )
}

export const 텍스트 : Story = {
    args : {
        children : <Text/>
    }
}