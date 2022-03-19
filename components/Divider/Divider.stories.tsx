import { Stack } from "@chakra-ui/react";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "../Heading/Heading";
import Divider from "./Divider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = (args) => (
  <Stack spacing={8}>
    <Heading>Section 1</Heading>
    <Divider {...args} />
    <Heading>Section 2</Heading>
  </Stack>
);

export const Default = Template.bind({});
