import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../Button";
import Heading from "../Heading";
import StatisticsTable from "../StatisticsTable";
import Text from "../Text";
import TokenAmountInput from "../TokenAmountInput";
import Modal from "./Modal";

export default {
  title: "Rari/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Open the modal on initial load
  useEffect(() => {
    onOpen();
  }, []);

  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }

  const ctx = {
    counter,
    incrementCounter,
  };

  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>
      {/*
       * Override ctx/isOpen/onClose with the fixed values defined in this
       * template.
       */}
      <Modal {...args} ctx={ctx} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Deposit collateral",
  subtitle: "Collateralizing is required before boosting pools.",
  progressValue: 80,
  buttons: [
    {
      children: "Skip",
      variant: "cardmatte",
    },
    {
      children: "Review transaction",
      variant: "neutral",
    },
  ],
  children: (
    <>
      <TokenAmountInput
        onClickMax={() => {}}
        tokenAddress="0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"
      />
      <StatisticsTable
        mt={4}
        statistics={[
          ["Collateral deposited", "0"],
          ["Boost balance", "0"],
        ]}
      />
    </>
  ),
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  children: (
    <>
      <CheckCircleIcon color="neutral" boxSize={40} />
      <Heading mt={8}>TRIBE Safe</Heading>
      <Text variant="secondary">Successfully created</Text>
    </>
  ),
};

export const StepBubbles = Template.bind({});
StepBubbles.args = {
  title: "Step 1",
  subtitle: "This is the first step in a multi-step process.",
  children: (
    <>
      <Text>There are more steps to come.</Text>
    </>
  ),
  buttons: [
    {
      children: "Skip",
      variant: "cardmatte",
    },
    {
      children: "Review transaction",
      variant: "neutral",
    },
  ],
  stepBubbles: {
    activeIndex: 1,
    steps: 3,
    background: "neutral",
  },
};

export const StepBubblesNoButtons = Template.bind({});
StepBubblesNoButtons.args = {
  title: "Step 1",
  subtitle: "This is the first step in a multi-step process.",
  children: (
    <>
      <Text>There are more steps to come.</Text>
    </>
  ),
  stepBubbles: {
    activeIndex: 1,
    steps: 3,
    background: "neutral",
  },
};

export const WithCtx = Template.bind({});
WithCtx.args = {
  title: (ctx: any) => `Counter (${ctx.counter})`,
  subtitle: ((ctx: any) => `Here's a counter: ${ctx.counter}`) as any,
  progressValue: (ctx: any) => ctx.counter,
  buttons: (ctx: any) => [
    {
      children: `Increment to ${ctx.counter + 1}`,
      variant: "neutral",
      onClick: ctx.incrementCounter,
    },
  ],
  children: (ctx: any) => (
    <>
      <Text>The counter is currently at {ctx.counter}.</Text>
    </>
  ),
};

export const WithFooterChildren = Template.bind({});
WithFooterChildren.args = {
  title: "Footer Children",
  subtitle: "This modal has footer children.",
  children: (
    <>
      <Text>Some text.</Text>
    </>
  ),
  buttons: [
    {
      children: "Button",
      variant: "success",
    },
  ],
  footerChildren: (
    <>
      <Heading size="xs">Common questions:</Heading>
      <Flex justifyContent="space-between">
        <Text mt={2} fontSize="xs">
          What are safes?
        </Text>
        <Text mt={2} fontSize="xs">
          What is boosting?
        </Text>
        <Text mt={2} fontSize="xs">
          How do liquidations work?
        </Text>
      </Flex>
    </>
  ),
};
