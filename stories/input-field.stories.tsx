import { InputField } from "../components/input-field/input-field";

export default {
  component: InputField,
  title: "Components/InputField",
  tags: ["autodocs"],
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "blue-950",
  color: "blue-50",
};
