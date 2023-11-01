import type { Meta, StoryObj } from "@storybook/react";

import PillButton, { Props } from "./index";
import {
  AddOutlined,
  PlayArrowOutlined,
  StopOutlined,
} from "@mui/icons-material";

import "./style.css";

const fn = () => {};

const meta: Meta<typeof PillButton> = {
  title: "Pill Button",
  component: PillButton,
  argTypes: {
    activeButton: {
      options: ["Left", "Right"],
      mapping: {
        Left: "left",
        Right: "right",
      },
      control: "select",
    },
    IconLeft: {
      options: ["Add", "Play", "Stop"],
      mapping: {
        Add: AddOutlined,
        Play: PlayArrowOutlined,
        Stop: StopOutlined,
      },
      control: "radio",
    },
    IconRight: {
      options: ["Add", "Play", "Stop"],
      mapping: {
        Add: AddOutlined,
        Play: PlayArrowOutlined,
        Stop: StopOutlined,
      },
      control: "radio",
    },
  },
  render: (args: Partial<Props>) => (
    // @ts-ignore
    <PillButton actionLeft={fn} actionRight={fn} {...args} />
  ),
};

export default meta;
type Story = StoryObj<typeof PillButton>;

export const Primary: Story = {
  args: {
    activeButton: "left",
    IconLeft: PlayArrowOutlined,
    IconRight: AddOutlined,
  },
};
