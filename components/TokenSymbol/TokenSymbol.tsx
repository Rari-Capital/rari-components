import { useEffect, useState } from "react";

type TokenSymbolProps = {
  tokenAddress: string;
};

/**
 * A component that displays a token's symbol from its address.
 *
 * TODO(nathanhleung): We can make this component significantly more efficient
 * by caching data. Look into extending the `<ChakraProvider />` into a custom
 * `<RariComponentsProvider />` and implementing caching there.
 */
const TokenSymbol: React.FC<TokenSymbolProps> = ({ tokenAddress }) => {
  const [symbol, setSymbol] = useState("");
  useEffect(() => {
    async function getData() {
      // Use Rari api to get token logo url
      const dataUrl = `https://rari-git-l2tokendata-rari-capital.vercel.app/api/tokenData?address=${tokenAddress.toLowerCase()}&chainId=1`;
      const data = await fetch(dataUrl);
      const json = await data.json();
      setSymbol(json.symbol);
    }

    getData();
  }, [tokenAddress]);

  return <>{symbol}</>;
};

export default TokenSymbol;
