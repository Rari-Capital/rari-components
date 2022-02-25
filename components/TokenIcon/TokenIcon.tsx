import { Avatar, AvatarProps } from "@chakra-ui/avatar";
import { ethers } from "ethers";

type TokenIconProps = AvatarProps & {
  address: string;
};

const TokenIcon: React.FC<TokenIconProps> = ({ address, ...restProps }) => {
  const checksumAddress = ethers.utils.getAddress(address);

  // Load icon from trustwallet/assets via jsdelivr
  const logoUrl = `https://cdn.jsdelivr.net/gh/trustwallet/assets@b75e0805b39b743cb25dd09561cc85777209ed84/blockchains/ethereum/assets/${checksumAddress}/logo.png`;

  return <Avatar src={logoUrl} {...restProps} />;
};

export default TokenIcon;
