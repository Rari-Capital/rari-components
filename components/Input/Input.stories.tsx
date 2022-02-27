import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  placeholder: "Small Input",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: "Medium Input",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Large Input",
  size: "lg",
};

export const Light = Template.bind({});
Light.args = {
  placeholder: "Light Input",
  size: "md",
  variant: "light",
};
