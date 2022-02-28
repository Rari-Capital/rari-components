import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { ethers } from "ethers";

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
  let logoUrl = "";
  try {
    const checksumTokenAddress = ethers.utils.getAddress(tokenAddress);
    // Load icon from trustwallet/assets via jsdelivr
    logoUrl = `https://cdn.jsdelivr.net/gh/trustwallet/assets@b75e0805b39b743cb25dd09561cc85777209ed84/blockchains/ethereum/assets/${checksumTokenAddress}/logo.png`;
  } catch {}

  return <Avatar src={logoUrl} {...restProps} />;
};

export default TokenIcon;
