import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Children = button label
export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    variant: "light",
    colorscheme: "secondary",
  },
};
