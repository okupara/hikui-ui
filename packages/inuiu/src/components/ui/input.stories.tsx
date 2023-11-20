import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
  title: "presets/input",
  component: Input,
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
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Test: Story = {
  render: (args) => (
    <input className="flex h-10 w-full rounded-md border-2 border-primary  shadow-cyan-800 shadow-none aria-[invalid=true]:border-destructive bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-[0.35rem] focus-visible:outline-ring focus-visible:ring-outline-2 disabled:cursor-not-allowed disabled:opacity-50" />
    // <input className="block w-full apperance-none rounded-md border-0 bg-white px-3 py-2 text-sm ring-1 ring-gray-950/10 outline-none shadow" />
  ),
};
export const Test2: Story = {
  render: (args) => (
    <input className="block w-full apperance-none rounded-md border-0 bg-white px-3 py-2 text-sm ring-1 ring-gray-950/10 outline-none shadow" />
  ),
};
