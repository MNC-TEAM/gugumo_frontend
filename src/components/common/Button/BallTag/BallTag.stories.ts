import type { Meta, StoryObj } from '@storybook/react';
import BallTag from "./BallTag";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta : Meta<typeof BallTag> = {
  title: 'Core/Button/BallTag',
  component: BallTag,
  tags : ["autodocs"],
  parameters : {
    layout : "centered"
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args : {}
}

export const Active: Story = {
    args : {
        active : true
    }
}

export const 배드민턴: Story = {
    args : {
        gametype : "BADMINTON"
    }
}

export const 농구: Story = {
    args : {
        gametype : "BASKETBALL"
    }
}

export const 풋살: Story = {
    args : {
        gametype : "FUTSAL"
    }
}

export const 테니스: Story = {
    args : {
        gametype : "TENNIS"
    }
}

export const 탁구: Story = {
    args : {
        gametype : "TABLETENNIS"
    }
}

export const 야구: Story = {
    args : {
        gametype : "BASEBALL"
    }
}