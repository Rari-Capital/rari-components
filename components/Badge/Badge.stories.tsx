import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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
  variant: "warning",
};

export const SuccessBadge = Template.bind({});
SuccessBadge.args = {
  children: "Success Badge",
  variant: "success",
};
