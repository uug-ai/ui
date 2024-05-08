import { create } from "@storybook/theming/create";
import logo from "./uug-logo.png";

export default create({
  base: "light",
  brandTitle: "UUG.AI Storybook",
  brandUrl: "https://ui.uug.ai",
  brandImage: logo,
  brandTarget: "_self",
});
