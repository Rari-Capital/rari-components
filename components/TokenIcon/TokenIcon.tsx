import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { useRariTokenData } from "../../hooks";

type TokenIconProps = AvatarProps & {
  /**
   * The address of the token to display a logo for.
   */
  tokenAddress: string;
  /**
   * The id of the chain that the token is deployed on. Defaults to `1`.
   */
  chainId?: number;
  /**
   * React elements to render while the token symbol is loading.
   */
  fallback?: React.ReactNode;
};

/**
 * A component that displays a token's icon from its address.
 */
const TokenIcon: React.FC<TokenIconProps> = ({
  tokenAddress,
  fallback,
  chainId = 1,
  ...restProps
}) => {
  const { data, loading } = useRariTokenData(tokenAddress, chainId);

  if (loading && !!fallback) {
    return <>{fallback}</>;
  }

  return <Avatar src={data?.logoURL} {...restProps} />;
};

export default TokenIcon;
export type { TokenIconProps };
