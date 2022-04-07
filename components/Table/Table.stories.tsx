import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  headings: ["Pool name", "Claimable interest", "APY", "Active boost"],
  rows: [
    {
      key: "1",
      items: ["Tetranode's Locker", "$3,651", "2.3%", "Active boost"],
    },
    {
      key: "2",
      items: ["Tetranode's Locker", "$3,651", "2.3%", "Active boost"],
    },
  ],
};
