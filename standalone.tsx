import { ChakraProvider } from "@chakra-ui/react";
import { uniqueId } from "lodash";
import React from "react";
import * as Main from "./index";
import theme from "./theme";

/**
 * Higher-order component that wraps a component in a `ChakraProvider` with the
 * rari-components theme.
 */
function withStandaloneTheme<Props>(
  Component: React.FC<Props>
): React.FC<Props> {
  const WithStandaloneThemeComponent: React.FC<Props> = (props) => (
    <ChakraProvider theme={theme}>
      <Component {...props} />
    </ChakraProvider>
  );
  WithStandaloneThemeComponent.displayName = `withStandaloneTheme(${Component.displayName})`;
  return WithStandaloneThemeComponent;
}

/**
 * Alternate entry point to the rari-components package. You can import
 * components from here with
 * `import { Badge, etc. } from "rari-components/standalone"`. If using the
 * `standalone` entrypoint, `<ChakraProvider />` does not need to have the
 * `rari-components/theme` theme set — each component will have its own
 * `<ChakraProvider />` with the correct theme pre-set. This entrypoint is
 * useful for incrementally adding components to an existing app without making
 * app-wide modifications to the theme, but prefer the main entrypoint at
 * `index.ts` for new apps.
 */
export const Badge = withStandaloneTheme(Main.Badge);
export const Button = withStandaloneTheme(Main.Button);
export const Card = withStandaloneTheme(Main.Card);
export const ExpandableCard = withStandaloneTheme(Main.ExpandableCard);
export const Heading = withStandaloneTheme(Main.Heading);
export const Input = withStandaloneTheme(Main.Input);
export const Link = withStandaloneTheme(Main.Link);
export const Progress = withStandaloneTheme(Main.Progress);
export const Statistic = withStandaloneTheme(Main.Statistic);
export const StatisticTable = withStandaloneTheme(Main.StatisticTable);
export const StepBubbles = withStandaloneTheme(Main.StepBubbles);
export const Tabs = withStandaloneTheme(Main.Tabs);
export const Text = withStandaloneTheme(Main.Text);
export const TokenAmountInput = withStandaloneTheme(Main.TokenAmountInput);
export const TokenIcon = withStandaloneTheme(Main.TokenIcon);
export const TokenGroup = withStandaloneTheme(Main.TokenGroup);
