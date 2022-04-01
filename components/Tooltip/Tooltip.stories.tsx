import React from "react";
import { Box } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "../Text";
import Tooltip from "./Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Box p={8}>
    <Tooltip {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  label: "Tooltip text",
  children: <Text display="inline">Hover to read a tooltip</Text>,
};
