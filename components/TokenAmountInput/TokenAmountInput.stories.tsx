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
  // Don't automatically add `actionHandler` function to props that start with
  // `on` to test `undefined` `onClickMax`.
  // https://github.com/storybookjs/addon-smart-knobs/issues/63
  parameters: {
    actions: {
      argTypesRegex: null,
    },
  },
} as ComponentMeta<typeof TokenAmountInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenAmountInput> = (args) => {
  return <TokenAmountInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: "md",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  onClickMax() {},
};

export const Controlled = Template.bind({});
Controlled.args = {
  size: "md",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  value: "10",
  onChange: (newValue) => console.log(newValue),
  onClickMax() {},
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  onClickMax() {},
};

export const Light = Template.bind({});
Light.args = {
  size: "md",
  variant: "light",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  onClickMax() {},
};

export const LongTokenSymbol = Template.bind({});
LongTokenSymbol.args = {
  size: "md",
  variant: "light",
  tokenAddress: "0x9355372396e3F6daF13359B7b607a3374cc638e0",
  onClickMax() {},
};

export const NoMax = Template.bind({});
NoMax.args = {
  size: "md",
  tokenAddress: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
};
