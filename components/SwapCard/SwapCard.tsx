import { Card, Grid, Text } from "@nextui-org/react";
import styles from "$styles/Swap.module.css";
import { FC } from "react";
import { ISwapCardProps } from "./SwapCard.types";

const SwapCard: FC<ISwapCardProps> = ({ convert, token, value, balance }) => {
  return (
    <Card
      css={{
        $$cardColor: "$colors$gray100",
        minHeight: "80px",
        mx: "auto",
        mw: "100%",
        p: "16px",
        boxSizing: "border-box",
        transition: "0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "$colors$gray200",
        },
      }}
      variant="flat"
    >
      <div className={styles.swapInputContainer}>
        <div className={styles.swapValue}>{value}</div>
        <div className={styles.swapToken}>{token}</div>
      </div>
      <Grid.Container css={{ mt: "5px" }} justify="space-between">
        <Text
          size={12}
          color="gray"
          css={{ m: "0", fontFamily: `"Roboto Mono", monospace` }}
        >
          {convert}
        </Text>
        {balance ? (
          <Text
            size={12}
            color="gray"
            css={{ m: "0", fontFamily: `"Roboto Mono", monospace` }}
          >
            Balance: {balance}
          </Text>
        ) : null}
      </Grid.Container>
    </Card>
  );
};

export default SwapCard;
