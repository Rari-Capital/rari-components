import { createContext, useContext, useEffect, useState } from "react";

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

  // Store data in `useState` to ensure components re-render whenever
  // `data` changes (the `ctx` object reference remains stable even after the
  // cache is updated, meaning components may not always re-render otherwise).
  const [data, setData] = useState<TokenData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      // Use Rari token data API to get token data
      const dataUrl =
        "https://rari-git-l2tokendata-rari-capital.vercel.app" +
        `/api/tokenData?address=${normalizedTokenAddress}&chainId=1`;
      try {
        const response = await fetch(dataUrl);
        const json = await response.json();

        // Store data in cache
        ctx[normalizedTokenAddress] = json;

        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    const cachedData = ctx[normalizedTokenAddress];
    if (typeof cachedData === "undefined") {
      getData();
    } else {
      setLoading(false);
      setData(cachedData);
    }
  }, [ctx, normalizedTokenAddress]);

  return { data, loading };
}

export default useRariTokenData;
