import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Text: Story;
export declare const Password: Story;
export declare const Number: Story;
export declare const Date: Story;
