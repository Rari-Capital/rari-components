import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
    },
  },
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Small = Template.bind({});
Small.args = {
  children: "Small Heading",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium Heading",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Heading",
  size: "lg",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: "Extra Large Heading",
  size: "xl",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning Heading",
  variant: "warning",
  size: "md",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success Heading",
  variant: "success",
  size: "md",
};

export const Gradient = Template.bind({});
Gradient.args = {
  children: "Gradient Heading",
  variant: "gradient",
  size: "md",
};
