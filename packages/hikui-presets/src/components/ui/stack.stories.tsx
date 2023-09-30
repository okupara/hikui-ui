import type { Meta, StoryObj } from "@storybook/react";

import { YStack } from "./stack";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof YStack> = {
  title: "presets/y-stack",
  component: YStack,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof YStack>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-level-1">
        <div className="red-400">hello</div>
        <div className="blue-400">world</div>
        <div className="gray-200">!!</div>
      </div>
    );
  },
};
