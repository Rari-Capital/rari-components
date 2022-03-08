import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TokenAmountInput from "./TokenAmountInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/TokenAmountInput",
  component: TokenAmountInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof TokenAmountInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenAmountInput> = (args) => (
  <TokenAmountInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "md",
  tokenSymbol: "FEI",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
};

export const Controlled = Template.bind({});
Controlled.args = {
  size: "md",
  tokenSymbol: "FEI",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  value: "10",
  onChange: (newValue) => console.log(newValue),
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  tokenSymbol: "FEI",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
};

export const Light = Template.bind({});
Light.args = {
  size: "md",
  variant: "light",
  tokenSymbol: "FEI",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
};
