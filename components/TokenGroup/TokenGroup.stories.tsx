import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenGroup from "./TokenGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/TokenGroup",
  component: TokenGroup,
} as ComponentMeta<typeof TokenGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenGroup> = (args) => (
  <TokenGroup {...args} />
);

export const Stables = Template.bind({});
Stables.args = {
  addresses: [
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    "0x6b175474e89094c44da98b954eedeac495271d0f",
  ],
};
