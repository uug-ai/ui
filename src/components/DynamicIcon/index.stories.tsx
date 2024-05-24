import { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Dynamic Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "dashboard",
  },
};
