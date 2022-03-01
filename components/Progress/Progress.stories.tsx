import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "./Progress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Progress",
  component: Progress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
    },
  },
} as ComponentMeta<typeof Progress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const LightWarning = Template.bind({});
LightWarning.args = {
  variant: "light",
  barVariant: "warning",
  value: 80,
};

export const DarkSuccess = Template.bind({});
DarkSuccess.args = {
  barVariant: "success",
  value: 80,
};

export const LightGradient = Template.bind({});
LightGradient.args = {
  variant: "light",
  barVariant: "gradient",
  value: 80,
};
