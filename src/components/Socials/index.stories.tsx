import { Meta, StoryObj } from "@storybook/react";
import { Socials } from ".";

const meta: Meta<typeof Socials> = {
  title: "Components/Socials",
  component: Socials,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
