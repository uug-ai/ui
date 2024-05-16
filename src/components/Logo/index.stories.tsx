import { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Children = button label
export const White: Story = {
  args: {
    variant: "white",
  },
};

export const Black: Story = {
  args: {
    variant: "black",
  },
};
