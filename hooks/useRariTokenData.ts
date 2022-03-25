import { createContext, useContext, useEffect } from "react";

/**
 * Type of the response from the Rari token data API
 */
type TokenData = {
  name: string;
  symbol: string;
  logoURL: string;
};

type RariTokenDataContextType = {
  [address: string]: TokenData | undefined;
};

const RariTokenDataContext = createContext<RariTokenDataContextType>({});

/**
 * A hook to get the data for the token with the given address. Caches results
 * in context and returns the cached result if called for a second time with the
 * same address.
 */
function useRariTokenData(tokenAddress: string) {
  /**
   * Note that context can be used without a matching `Provider` above it in
   * the tree, in which case it will fall back to the default value. Thus, it
   * is not required for component consumers to wrap their app in
   * `<RariTokenDataContext.Provider />`
   */
  const ctx = useContext(RariTokenDataContext);
  const normalizedTokenAddress = tokenAddress.toLowerCase();

  useEffect(() => {
    async function getData() {
      // Use Rari token data API to get token data
      const dataUrl =
        "https://rari-git-l2tokendata-rari-capital.vercel.app" +
        `/api/tokenData?address=${normalizedTokenAddress}&chainId=1`;
      const data = await fetch(dataUrl);
      const json = await data.json();
      ctx[normalizedTokenAddress] = json;
    }

    if (typeof ctx[normalizedTokenAddress] === "undefined") {
      getData();
    }
  }, [ctx, normalizedTokenAddress]);

  return ctx[normalizedTokenAddress];
}

export default useRariTokenData;
