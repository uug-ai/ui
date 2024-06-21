import { Meta, StoryObj } from "@storybook/react";
import KPI from "./KPI";

const meta: Meta<typeof KPI> = {
  title: "Components/KPI",
  component: KPI,
  argTypes: {
    firstValue: {
      control: {
        type: "number",
      },
      defaultValue: 50,
    },
    secondValue: {
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
    label: {
      control: {
        type: "text",
      },
      defaultValue: "label",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstValue: 50,
    secondValue: 100,
    label: "label",
  },
};
