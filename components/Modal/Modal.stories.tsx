import { Box } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Modal from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <Box>
    <Modal buttons={[]} {...args} />
  </Box>
);

export const Default = Template.bind({});
