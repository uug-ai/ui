import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Light = Template.bind({});
Light.args = {
  backgroundColor: "blue-50",
  color: "blue-950",
};
