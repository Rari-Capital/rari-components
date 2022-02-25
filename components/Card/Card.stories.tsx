import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Statistic from "../Statistic/Statistic";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Card",
  component: Card,
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
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card",
};

export const Light = Template.bind({});
Light.args = {
  children: "Light Card",
  variant: "light",
};

export const WithStatistic = Template.bind({});
WithStatistic.args = {
  children: <Statistic title="A statistic" value="over 9000" />,
};

export const Active = Template.bind({});
Active.args = {
  children: "Active Card",
  variant: "active",
};
