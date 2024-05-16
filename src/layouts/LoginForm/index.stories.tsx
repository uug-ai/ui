import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from ".";

const meta: Meta<typeof LoginForm> = {
  title: "Layout/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
