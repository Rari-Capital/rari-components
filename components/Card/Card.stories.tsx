import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Statistic from "../Statistic";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Card",
  component: Card,
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

export const Ghost = Template.bind({});
Ghost.args = {
  children: "Ghost Card",
  variant: "ghost",
};

export const WithStatistic = Template.bind({});
WithStatistic.args = {
  children: <Statistic title="A statistic" value="over 9000" />,
};

export const LightWithStatistic = Template.bind({});
LightWithStatistic.args = {
  children: <Statistic title="A statistic" value="over 9000" variant="dark" />,
  variant: "light",
};

export const Active = Template.bind({});
Active.args = {
  children: "Active Card",
  variant: "active",
};
