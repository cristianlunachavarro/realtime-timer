import type { Meta, StoryObj } from "@storybook/react";

import Display from "./index";

const meta: Meta<typeof Display> = {
  component: Display,
};

export default meta;
type Story = StoryObj<typeof Display>;

export const Primary: Story = {
  args: {
    timer: 0,
  },
};
  
