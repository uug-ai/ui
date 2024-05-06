import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: { handleClick: { action: "Handle click event" } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Light = Template.bind({});
Light.args = {
  backgroundColor: "blue-50",
  color: "blue-950",
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "This is a button with a longer label",
};
