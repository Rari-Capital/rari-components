import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: "Default Small Button",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Default Medium Button",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  children: "Default Large Button",
  size: "lg",
};

export const NeutralMedium = Template.bind({});
NeutralMedium.args = {
  children: "Neutral Medium Button",
  variant: "neutral",
  size: "md",
};

export const SuccessMedium = Template.bind({});
SuccessMedium.args = {
  children: "Success Medium Button",
  variant: "success",
  size: "md",
};

export const WarningMedium = Template.bind({});
WarningMedium.args = {
  children: "Warning Medium Button",
  variant: "warning",
  size: "md",
};

export const DarkCardStyleMedium = Template.bind({});
DarkCardStyleMedium.args = {
  children: "Dark Card Style Medium Button",
  variant: "cardmatte",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Default Disabled Button",
  size: "md",
  disabled: true,
};

export const NeutralDisabled = Template.bind({});
NeutralDisabled.args = {
  children: "Neutral Disabled Button",
  variant: "neutral",
  size: "md",
  disabled: true,
};
