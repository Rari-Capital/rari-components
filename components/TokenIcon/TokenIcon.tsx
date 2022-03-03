import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

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
  // let logoUrl = "";
  // try {
  //   const checksumTokenAddress = ethers.utils.getAddress(tokenAddress);
  //   // Load icon from trustwallet/assets via jsdelivr
  //   logoUrl = `https://cdn.jsdelivr.net/gh/trustwallet/assets@b75e0805b39b743cb25dd09561cc85777209ed84/blockchains/ethereum/assets/${checksumTokenAddress}/logo.png`;
  // } catch {}

  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    async function getData() {
      // Use Rari api to get token logo url
      const dataUrl = `https://rari-git-l2tokendata-rari-capital.vercel.app/api/tokenData?address=${tokenAddress.toLowerCase()}&chainId=1`;
      const data = await fetch(dataUrl);
      const json = await data.json();
      setLogoUrl(json.logoURL);
    }

    getData();
  }, [tokenAddress]);

  return <Avatar src={logoUrl} {...restProps} />;
};

export default TokenIcon;
