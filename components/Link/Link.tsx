import NextLink from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

type LinkProps = ChakraLinkProps & {
  href: React.ComponentProps<typeof NextLink>["href"];
};

const Link: React.FC<LinkProps> = ({ href, ...restProps }) => {
  // See https://chakra-ui.com/docs/navigation/link#usage-with-nextjs for more
  // info
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        fontWeight={600}
        color="white"
        _hover={{ textDecoration: "none", color: "lightgray" }}
        {...restProps}
      />
    </NextLink>
  );
};

export default Link;