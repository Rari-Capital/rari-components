import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StatisticTable from "./StatisticsTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/StatisticTable",
  component: StatisticTable,
} as ComponentMeta<typeof StatisticTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatisticTable> = (args) => (
  <StatisticTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  statistics: [
    ["Supply Balance", "$23,456", "How much you're supplying"],
    ["Borrow Limit", "$200"],
    ["Utilization", "69.00%"],
  ],
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  statistics: [
    ["Supply Balance", "$23,456"],
    ["Borrow Limit", "$200"],
    ["Utilization", "69.00%"],
  ],
};
