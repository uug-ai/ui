import { InputField } from ".";

export default {
  component: InputField,
  title: "Components/InputField",
  tags: ["autodocs"],
};

const Template = (args) => <InputField {...args} />;

export const DefaultField = Template.bind({});
DefaultField.args = {
  backgroundColor: "blue-950",
  color: "blue-50",
};
