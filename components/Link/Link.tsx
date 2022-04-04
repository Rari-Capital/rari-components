import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type LinkProps = ChakraLinkProps & {
  href: React.ComponentProps<typeof NextLink>["href"];
};

/**
 * A Link component which supports Next.js links out of the box for use in
 * any Next.js-based Rari dapp.
 */
const Link: React.FC<LinkProps> = ({ href, ...restProps }) => {
  // See https://chakra-ui.com/docs/navigation/link#usage-with-nextjs for more
  // info
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...restProps} />
    </NextLink>
  );
};

export default Link;
export type { LinkProps };
