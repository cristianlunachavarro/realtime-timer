import type { Meta, StoryObj } from "@storybook/react";

import {
  AddOutlined,
  PlayArrowOutlined,
  StopOutlined,
} from "@mui/icons-material";

import RoundButton from "./index";

import "./style.css";

const meta: Meta<typeof RoundButton> = {
  title: "Round Button",
  component: RoundButton,
  argTypes: {
    Icon: {
      options: ["Add", "Play", "Stop"],
      control: "select",
      mapping: {
        Add: AddOutlined,
        Play: PlayArrowOutlined,
        Stop: StopOutlined,
      },
    },
    bgColor: {
      options: ["Red", "Blue"],
      control: "select",
      mapping: {
        Red: "error",
        Blue: "primary",
      },
    },
  },
  render: (args) => (
    // @ts-ignore
    <RoundButton handleClick={() => {}} {...args} />
  ),
};

export default meta;
type Story = StoryObj<typeof RoundButton>;

export const Primary: Story = {
  args: {
    Icon: StopOutlined,
    bgColor: "error",
  },
};
