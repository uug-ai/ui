import { Meta, StoryObj } from "@storybook/react";
import CameraSwap from "./cameraswap";
import Dashboard from "./dashboard";
import FaceScan from "./facescan";
import Github from "./github";
import Help from "./help";
import History from "./history";
import Insights from "./insights";
import Linkedin from "./linkedin";
import Logo from "./logo";
import LogOut from "./logout";
import Notification from "./notification";
import Profile from "./profile";
import Slack from "./slack";
import Youtube from "./youtube";

const meta: Meta = {
  title: "Components/Icons",
};

export default meta;

type IconStory = StoryObj<{ className: string }>;

export const logout: IconStory = {
  render: (args) => <LogOut {...args} />,
};

export const notification: IconStory = {
  render: (args) => <Notification {...args} />,
};

export const profile: IconStory = {
  render: (args) => <Profile {...args} />,
};

export const cameraswap: IconStory = {
  render: (args) => <CameraSwap {...args} />,
};

export const dashboard: IconStory = {
  render: (args) => <Dashboard {...args} />,
};

export const facescan: IconStory = {
  render: (args) => <FaceScan {...args} />,
};

export const github: IconStory = {
  render: (args) => <Github {...args} />,
};

export const help: IconStory = {
  render: (args) => <Help {...args} />,
};

export const history: IconStory = {
  render: (args) => <History {...args} />,
};

export const insights: IconStory = {
  render: (args) => <Insights {...args} />,
};

export const linkedin: IconStory = {
  render: (args) => <Linkedin {...args} />,
};

export const logo: IconStory = {
  render: (args) => <Logo {...args} />,
};

export const youtube: IconStory = {
  render: (args) => <Youtube {...args} />,
};

export const slack: IconStory = {
  render: (args) => <Slack {...args} />,
};
