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
  "The default variant is a span. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eius voluptate ipsam earum perspiciatis repudiandae vitae nemo hic fugit, commodi eveniet. Soluta quae blanditiis sunt voluptatum reiciendis quos voluptatem fugit!";

export const Default: Story = {
  args: {
    children: fillerText,
  },
};

export const Header: Story = {
  args: {
    as: "h1",
    size: "5xl",
    children: "This is a header",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
    children:
      "This is a paragraph. It's a fundamental unit of textual organization, typically consisting of a coherent set of sentences that express a central idea or theme. Paragraphs serve to structure written communication, providing readers with breaks between ideas and facilitating comprehension. They are essential in conveying information effectively, guiding the reader through a logical progression of thoughts or arguments. A well-crafted paragraph begins with a topic sentence that introduces the main idea, followed by supporting sentences that provide evidence, examples, or elaboration. Transitions between paragraphs help maintain coherence and flow, ensuring smooth progression from one idea to the next. Effective paragraphs vary in length and complexity depending on the context, audience, and purpose of the writing. Whether in essays, articles, or stories, paragraphs play a crucial role in organizing and presenting information in a clear, concise, and engaging manner.",
  },
};

export const Semibold: Story = {
  args: {
    weight: "semibold",
    children: "This is a semibold text",
  },
};

export const Link: Story = {
  args: {
    as: "a",
    variant: "link",
    color: "light",
    underline: true,
    hover: "pointer",
    children: "This is a link",
  },
};
