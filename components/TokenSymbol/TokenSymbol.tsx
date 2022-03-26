import { useRariTokenData } from "../../hooks";

type TokenSymbolProps = {
  /**
   * The address of the token to get a symbol for.
   */
  tokenAddress: string;
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
}) => {
  const { data, loading } = useRariTokenData(tokenAddress);

  if (loading && !!fallback) {
    return <>{fallback}</>;
  }

  return <>{data?.symbol}</>;
};

export default TokenSymbol;
