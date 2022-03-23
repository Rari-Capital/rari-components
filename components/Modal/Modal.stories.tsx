import { Box, useDisclosure } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Button from "../Button";
import Heading from "../Heading";
import StatisticTable from "../StatisticTable";
import Text from "../Text";
import TokenAmountInput from "../TokenAmountInput";
import Modal from "./Modal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Rari/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = ({
  title,
  subtitle,
  progressValue,
  children,
  buttons,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    isOpen: true,
  });

  return (
    <Box>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        title={title}
        subtitle={subtitle}
        buttons={buttons}
        isOpen={isOpen}
        onClose={onClose}
        progressValue={progressValue}
      >
        {children}
      </Modal>
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
        tokenSymbol="TRIBE"
        tokenAddress="0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B"
      />
      <StatisticTable
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
      <Heading>TRIBE Safe</Heading>
      <Text variant="secondary">Successfully created</Text>
    </>
  ),
};
