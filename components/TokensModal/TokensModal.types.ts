import { Token } from "$types/global";
import { Dispatch, SetStateAction } from "react";

export interface ITokensModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  selectedToken: Token | null;
  setSelectedToken: Dispatch<SetStateAction<Token | null>>;
  selectedTokenAlt: Token | null;
  setSelectedTokenAlt: Dispatch<SetStateAction<Token | null>>;
}
