import type { Meta, StoryObj } from "@storybook/react";

import TimeSelector, { Props } from "./index";

import "./style.css";

const fn = () => {};

const meta: Meta<typeof TimeSelector> = {
  title: "Time Selector",
  component: TimeSelector,
  render: (args: Partial<Props>) => (
    // @ts-ignore
    <TimeSelector
      onChangeEnd={fn}
      onChangeStart={fn}
      onErrorChange={fn}
      {...args}
    />
  ),
};
export default meta;

type Story = StoryObj<typeof TimeSelector>;
export const Primary: Story = {
  args: {
    startTime: new Date(),
    endTime: new Date(),
    timeError: false,
  },
};
