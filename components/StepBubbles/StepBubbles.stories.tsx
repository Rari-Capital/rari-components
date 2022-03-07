import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StepBubbles from "./StepBubbles";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/StepBubbles",
  component: StepBubbles,
} as ComponentMeta<typeof StepBubbles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StepBubbles> = (args) => (
  <StepBubbles {...args} />
);

export const Default = Template.bind({});
Default.args = {
  steps: 3,
  activeIndex: 0,
};
