import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const fillerText: string =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eius voluptate ipsam earum perspiciatis repudiandae vitae nemo hic fugit, commodi eveniet. Soluta quae blanditiis sunt voluptatum reiciendis quos voluptatem fugit!";

export const Default: Story = {
  args: {
    children: fillerText,
  },
};

export const Title: Story = {
  args: {
    as: "h1",
    children: "This is a title",
  },
};
