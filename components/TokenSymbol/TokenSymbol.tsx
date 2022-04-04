import { useRariTokenData } from "../../hooks";

type TokenSymbolProps = {
  /**
   * The address of the token to get a symbol for.
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
 * A component that displays a token's symbol from its address. Can be wrapped
 * in a `<Heading />` or `<Text />`.
 */
const TokenSymbol: React.FC<TokenSymbolProps> = ({
  tokenAddress,
  fallback,
  chainId = 1,
}) => {
  const { data, loading } = useRariTokenData(tokenAddress, chainId);

  if (loading && !!fallback) {
    return <>{fallback}</>;
  }

  return <>{data?.symbol}</>;
};

export default TokenSymbol;
export type { TokenSymbolProps };
