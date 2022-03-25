import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text from "../Text";
import HoverableCard from "./HoverableCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/HoverableCard",
  component: HoverableCard,
} as ComponentMeta<typeof HoverableCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HoverableCard> = (args) => (
  <HoverableCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  children(hovered) {
    return <Text>{hovered ? "Hovered" : "Not Hovered"}</Text>;
  },
};
