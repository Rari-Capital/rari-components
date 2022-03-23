import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Statistic from "../Statistic";
import ExpandableCard from "./ExpandableCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/ExpandableCard",
  component: ExpandableCard,
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
} as ComponentMeta<typeof ExpandableCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExpandableCard> = (args) => (
  <ExpandableCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "ExpandableCard",
  expandableChildren: <p>Expandable content</p>,
};

export const Light = Template.bind({});
Light.args = {
  children: "Light ExpandableCard",
  expandableChildren: <p>Expandable content</p>,
  variant: "light",
};
