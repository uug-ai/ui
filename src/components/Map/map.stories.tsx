import { Meta, StoryObj } from "@storybook/react";
import MyMap from "./map";

const meta: Meta<typeof MyMap> = {
  title: "Components/Map",
  component: MyMap,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof MyMap>;

export const Default: Story = {
  args: {
    height: 300,
    defaultCenter: [50.879, 4.6997],
    defaultZoom: 11,
  },
};
