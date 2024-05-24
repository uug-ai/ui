// index.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Icon from ".";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "dasboard", // can i make this type value dynamic?
  },
};
