import type { Meta, StoryObj } from "@storybook/react";
import Navigation from ".";

const meta: Meta<typeof Navigation> = {
  title: "Layout/Navigation",
  component: Navigation,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
