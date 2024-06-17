import { Meta, StoryObj } from "@storybook/react";
import { Maps } from "./map";

const meta: Meta<typeof Maps> = {
  title: "Components/Maps",
  component: Maps,
  tags: ["autodocs"],
  argTypes: {
    height: {
      control: { type: "number" },
      defaultValue: 300,
    },
    width: {
      control: { type: "number" },
      defaultValue: 600,
    },
    defaultCenter: {
      control: { type: "object" },
      defaultValue: [50.879, 4.6997],
    },
    defaultZoom: {
      control: { type: "number" },
      defaultValue: 11,
    },
    markerLocation: {
      control: { type: "object" },
      defaultValue: [50.879, 4.6997],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 300,
    width: 600,
    defaultCenter: [50.879, 4.6997],
    defaultZoom: 11,
    markerLocation: [50.879, 4.6997],
  },
};
