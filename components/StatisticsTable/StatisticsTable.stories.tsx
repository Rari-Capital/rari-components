import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StatisticsTable from "./StatisticsTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/StatisticsTable",
  component: StatisticsTable,
} as ComponentMeta<typeof StatisticsTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatisticsTable> = (args) => (
  <StatisticsTable {...args} />
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

export const WithDivider = Template.bind({});
WithDivider.args = {
  statistics: [
    ["Supply Balance", "$23,456"],
    ["Borrow Limit", "$200"],
    null,
    ["Utilization", "69.00%"],
  ],
};
