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

export const BADMINTON: Story = {
    args : {
        gametype : "BADMINTON"
    }
}

export const BASKETBALL: Story = {
    args : {
        gametype : "BASKETBALL"
    }
}

export const FUTSAL: Story = {
    args : {
        gametype : "FUTSAL"
    }
}

export const TENNIS: Story = {
    args : {
        gametype : "TENNIS"
    }
}

export const TABLETENNIS: Story = {
    args : {
        gametype : "TABLETENNIS"
    }
}

export const BASEBALL: Story = {
    args : {
        gametype : "BASEBALL"
    }
}