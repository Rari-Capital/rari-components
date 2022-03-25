import { useRariTokenData } from "../../hooks";

type TokenSymbolProps = {
  tokenAddress: string;
};

/**
 * A component that displays a token's symbol from its address. Can be wrapped
 * in a `<Heading />` or `<Text />`.
 */
const TokenSymbol: React.FC<TokenSymbolProps> = ({ tokenAddress }) => {
  const data = useRariTokenData(tokenAddress);

  return <>{data?.symbol}</>;
};

export default TokenSymbol;
