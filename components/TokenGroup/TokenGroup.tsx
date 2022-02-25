import { AvatarGroup, AvatarGroupProps } from "@chakra-ui/avatar";
import TokenIcon from "../TokenIcon/TokenIcon";

type TokenGroupProps = AvatarGroupProps & {
  addresses: string[];
};

const TokenGroup: React.FC<TokenGroupProps> = ({ addresses, ...restProps }) => {
  return (
    <AvatarGroup {...restProps}>
      {addresses.map((address) => (
        <TokenIcon key={address} address={address} />
      ))}
    </AvatarGroup>
  );
};

export default TokenGroup;
