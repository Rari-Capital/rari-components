import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Statistic from "./Statistic";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Statistic",
  component: Statistic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      type: { name: "string", required: true },
    },
    value: {
      type: { name: "string", required: true },
    },
  },
} as ComponentMeta<typeof Statistic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Statistic> = (args) => (
  <Statistic {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "You supplied",
  value: "$23,300",
};
