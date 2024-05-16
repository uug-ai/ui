import { Meta, StoryObj } from "@storybook/react";
import { Password as Field } from ".";

const meta: Meta<typeof Field> = {
  title: "Components/Password",
  component: Field,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    placeholder: "Password",
  },
};
