import { AvatarGroup, AvatarGroupProps } from "@chakra-ui/avatar";
import TokenIcon from "../TokenIcon";

type TokenGroupProps = Omit<AvatarGroupProps, "children"> & {
  addresses: string[];
};

/**
 * A component which displays a group of token icons (useful for Fuse pools).
 */
const TokenGroup: React.FC<TokenGroupProps> = ({ addresses, ...restProps }) => {
  return (
    <AvatarGroup {...restProps}>
      {addresses.map((address) => (
        <TokenIcon key={address} tokenAddress={address} />
      ))}
    </AvatarGroup>
  );
};

export default TokenGroup;
