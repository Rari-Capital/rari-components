import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    fontSize: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
      ],
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
  children: "Small Text",
  fontSize: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium Text",
  fontSize: "md",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Text",
  fontSize: "lg",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: "Extra Large Text",
  fontSize: "xl",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Text",
  variant: "secondary",
  fontSize: "md",
};
