import { Meta, StoryObj } from "@storybook/react";
import Maps from "./map";

const meta: Meta<typeof Maps> = {
  title: "Components/Map",
  component: Maps,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Maps>;

export const Default: Story = {
  args: {
    height: 300,
    defaultCenter: [50.879, 4.6997],
    defaultZoom: 11,
  },
};
