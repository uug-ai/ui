import { Meta, StoryObj } from "@storybook/react";
import { Row } from ".";
import { Box } from "../Box";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Row className="gap-4 p-4 bg-gray-50" {...args}>
      <Box className="w-[100px] h-[100px] bg-primary-950">1</Box>
      <Box className="w-[100px] h-[100px] bg-primary-950">2</Box>
      <Box className="w-[100px] h-[100px] bg-primary-950">3</Box>
    </Row>
  ),
};
