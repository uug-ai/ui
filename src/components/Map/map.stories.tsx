import { Meta, StoryObj } from "@storybook/react";
import Maps from "./map";

const meta: Meta<typeof Maps> = {
  title: "Components/Map",
  component: Maps,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    height: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    defaultCenter: {
      control: { type: "object" },
    },
    defaultZoom: {
      control: { type: "number" },
    },
    markerLocation: {
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: "500px",
    width: "500px",
    defaultCenter: [50.879, 4.6997],
    defaultZoom: 11,
    markerLocation: [50.879, 4.6997],
  },
};
