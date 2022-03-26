import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { useRariTokenData } from "../../hooks";

type TokenIconProps = AvatarProps & {
  /**
   * The address of the token to display a logo for.
   */
  tokenAddress: string;
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
  ...restProps
}) => {
  const { data, loading } = useRariTokenData(tokenAddress);

  if (loading && !!fallback) {
    return <>{fallback}</>;
  }

  return <Avatar src={data?.logoURL} {...restProps} />;
};

export default TokenIcon;
