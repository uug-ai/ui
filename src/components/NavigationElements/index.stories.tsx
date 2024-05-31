import { Meta, StoryObj } from "@storybook/react";
import { NavigationFooter, NavigationHeader, NavigationSocials } from "./index";

// Define meta configuration for Storybook
const meta: Meta<typeof NavigationHeader> = {
  title: "Components/Navigation Elements",
  component: NavigationHeader,
  subcomponents: { NavigationFooter, NavigationSocials },
};

export default meta;

export const DefaultHeader: StoryObj<typeof NavigationHeader> = {
  render: () => <NavigationHeader />,
  args: {},
};

export const DefaultFooter: StoryObj<typeof NavigationFooter> = {
  render: () => <NavigationFooter />,
  args: {},
};

export const DefaultSocials: StoryObj<typeof NavigationSocials> = {
  render: () => <NavigationSocials />,
  args: {},
};
