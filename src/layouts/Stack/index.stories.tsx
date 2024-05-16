import { Meta, StoryObj } from "@storybook/react";
import { Stack } from ".";
import { Box } from "../Box";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Stack className="gap-4 p-4 bg-primary-50" {...args}>
      <Box className="w-[100px] h-[100px] bg-primary-950">1</Box>
      <Box className="w-[100px] h-[100px] bg-primary-950">2</Box>
      <Box className="w-[100px] h-[100px] bg-primary-950">3</Box>
    </Stack>
  ),
};
