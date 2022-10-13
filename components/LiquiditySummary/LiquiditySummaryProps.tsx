import { Card, Grid, Text } from "@nextui-org/react";
import { FC } from "react";
import { LiquiditySummaryProps } from "./LiquiditySummary.types";

const LiquiditySummary: FC<LiquiditySummaryProps> = ({
  share,
  tokenOne,
  tokenTwo,
  liquidityOne,
  liquidityTwo,
}) => {
  return (
    <Card
      css={{
        $$cardColor: "$colors$gray100",
        minHeight: "80px",
        mx: "auto",
        mw: "100%",
        p: "16px",
      }}
      variant="flat"
    >
      <Text b size={14} css={{ mb: "16px" }}>
        Prices and pool share
      </Text>
      <hr />
      <Grid.Container
        css={{
          gap: "10px",
          flexWrap: "wrap",
          mt: "16px",
        }}
        justify="center"
      >
        <div>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            b
            size={14}
          >
            {liquidityOne}
          </Text>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            size={13}
          >
            {tokenOne} per {tokenTwo}
          </Text>
        </div>
        <div>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            b
            size={14}
          >
            {liquidityTwo}
          </Text>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            size={13}
          >
            {tokenTwo} per {tokenOne}
          </Text>
        </div>
        <div>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            b
            size={14}
          >
            {share}
          </Text>
          <Text
            css={{
              display: "block",
              textAlign: "center",
              color: "$colors$gray800",
            }}
            size={13}
          >
            Share of Pool
          </Text>
        </div>
      </Grid.Container>
    </Card>
  );
};

export default LiquiditySummary;
