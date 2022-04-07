import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Badge from "./Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const WarningBadge = Template.bind({});
WarningBadge.args = {
  children: "Warning Badge",
  background: "warning",
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
  children: "Success Badge",
  background: "success",
};

export const LightSuccessBadge = Template.bind({});
LightSuccessBadge.args = {
  children: "Light Success Badge",
  background: "success",
  variant: "light"
};

export const LargeBadge = Template.bind({});
LargeBadge.args = {
  fontSize: "lg",
  boxSize: 20,
  children: "Large",
  background: "primary",
};
