import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters : {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LoggedOut: Story = {}

export const LoggedIn: Story = {}