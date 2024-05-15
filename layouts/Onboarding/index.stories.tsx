import type { Meta, StoryObj } from "@storybook/react";
import { Onboarding } from ".";

const meta: Meta<typeof Onboarding> = {
  title: "Layout/Onboarding",
  component: Onboarding,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {};
