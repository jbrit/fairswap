import { ReactNode } from "react";

export interface ISwapCardProps {
  value: ReactNode;
  token: ReactNode;
  convert?: string;
  balance?: string;
}
