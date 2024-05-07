import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eius voluptate ipsam earum perspiciatis repudiandae vitae nemo hic fugit, commodi eveniet. Soluta quae blanditiis sunt voluptatum reiciendis quos voluptatem fugit!",
  },
};
