import { Meta, StoryObj } from "@storybook/react";
import Gradient from "./Gradient";

const meta: Meta<typeof Gradient> = {
  title: "Components/Gradient",
  component: Gradient,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
