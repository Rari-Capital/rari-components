import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { ethers } from "ethers";

type TokenIconProps = AvatarProps & {
  tokenAddress: string;
};

const TokenIcon: React.FC<TokenIconProps> = ({
  tokenAddress,
  ...restProps
}) => {
  const checksumTokenAddress = ethers.utils.getAddress(tokenAddress);

  // Load icon from trustwallet/assets via jsdelivr
  const logoUrl = `https://cdn.jsdelivr.net/gh/trustwallet/assets@b75e0805b39b743cb25dd09561cc85777209ed84/blockchains/ethereum/assets/${checksumTokenAddress}/logo.png`;

  return <Avatar src={logoUrl} {...restProps} />;
};

export default TokenIcon;
