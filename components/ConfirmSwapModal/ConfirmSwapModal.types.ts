import { ISummaryCardProps } from "$components/SummaryCard/SummaryCard.types";
import { Dispatch, SetStateAction } from "react";

export interface IConfirmSwapModalProps extends ISummaryCardProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
