import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./Link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Link",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      type: { name: "string", required: true },
    },
    value: {
      type: { name: "string", required: true },
    },
  },
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "https://google.com",
  children: "Google",
};

export const Secondary = Template.bind({});
Secondary.args = {
  href: "https://google.com",
  children: "Google",
  variant: "secondary",
};
