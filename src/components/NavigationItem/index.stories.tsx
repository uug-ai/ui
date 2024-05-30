import { Meta, StoryObj } from "@storybook/react";
import NavItem from ".";

const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "Blank",
    title: "Title",
  },
};
