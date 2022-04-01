import React from "react";
import { Flex } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "../Heading";
import TokenIcon from "../TokenIcon";
import Statistic from "./Statistic";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Statistic",
  component: Statistic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: {
      type: { name: "string", required: true },
    },
    value: {
      type: { name: "string", required: true },
    },
  },
} as ComponentMeta<typeof Statistic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Statistic> = (args) => (
  <Statistic {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "You supplied",
  value: "$23,300",
};

export const ReactNodeValue = Template.bind({});
ReactNodeValue.args = {
  title: "You supplied",
  secondaryValue: "$100",
  value: (
    <Flex alignItems="center">
      <TokenIcon tokenAddress="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" />
      <Heading ml={2}>100 USDC</Heading>
    </Flex>
  ),
  tooltip: "$100.00",
};

export const Row = () => (
  <Flex>
    <Statistic title="Title" value="100" />
    <Statistic title="Title" value="100" secondaryValue="Subtitle" />
  </Flex>
);
