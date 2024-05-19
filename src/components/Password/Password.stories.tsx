import { Meta, StoryObj } from "@storybook/react";
import Password from "./Password";

const meta: Meta<typeof Password> = {
  title: "Components/Password",
  component: Password,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Hidden: Story = {
  args: {
    placeholder: "Password",
  },
};
