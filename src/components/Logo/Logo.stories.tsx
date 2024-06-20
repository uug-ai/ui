// Logo.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Logo from "../icons/logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["black", "white"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    color: "black",
  },
};
