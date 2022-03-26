import React from "react";
import { SkeletonCircle } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TokenIcon from "./TokenIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/TokenIcon",
  component: TokenIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    tokenAddress: {
      type: { name: "string", required: true },
    },
  },
} as ComponentMeta<typeof TokenIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenIcon> = (args) => (
  <TokenIcon {...args} />
);

export const UsdCoin = Template.bind({});
UsdCoin.args = {
  tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
};

export const FeiUsd = Template.bind({});
FeiUsd.args = {
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
};

export const Tribe = Template.bind({});
Tribe.args = {
  tokenAddress: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  tokenAddress: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
  fallback: <SkeletonCircle />,
};
