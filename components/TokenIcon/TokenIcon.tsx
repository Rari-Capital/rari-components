import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { useRariTokenData } from "../../hooks";

type TokenIconProps = AvatarProps & {
  tokenAddress: string;
};

/**
 * A component that displays a token's icon from its address. Uses the
 * `trustwallet/assets` repository and jsdelivr.net CDN internally.
 */
const TokenIcon: React.FC<TokenIconProps> = ({
  tokenAddress,
  ...restProps
}) => {
  const data = useRariTokenData(tokenAddress);

  return <Avatar src={data?.logoURL} {...restProps} />;
};

export default TokenIcon;
