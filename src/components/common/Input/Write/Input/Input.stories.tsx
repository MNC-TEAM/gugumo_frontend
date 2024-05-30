import type { Meta, StoryObj } from '@storybook/react';
import Input from "./Input";
import DownIcon from "@asset/icon/down.svg";

export interface InputType {
  /**
   * Input,Select 을 넣어주세요
  */
  children : React.ReactNode
}


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Input> = {
  title: 'Layout/Write/Input',
  component: Input,
  tags : ["autodocs"],
  parameters : {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args : {}
}

function SelectComponent(){
  return (
    <>
      <select>
        <option value="">단기모집</option>
        <option value="">장기모집</option>
      </select>
      <DownIcon stroke={'#878787'} />
    </>
  )
}

export const Select: Story = {
  args : {
    children : <SelectComponent/>
  }
}

function TextComponent(){
  return (
    <input type="text" placeholder="텍스트를 입력해주세요."/>
  )
}

export const Text: Story = {
  args : {
    children : <TextComponent/>
  }
}