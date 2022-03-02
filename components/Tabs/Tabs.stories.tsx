import React from "react";
import { Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tabs from "./Tabs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab>Hello</Tab>
      <Tab>World</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>Hello</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Tabs",
};
