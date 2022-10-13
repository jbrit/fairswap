import { Card, Grid, Text } from "@nextui-org/react";
import { FC } from "react";
import { ISummaryCardProps } from "./SummaryCard.types";

const SummaryCard: FC<ISummaryCardProps> = ({
  minimumReceived,
  networkFee,
  output,
  priceImpact,
  slippage,
}) => {
  return (
    <Card
      css={{
        border: "1px solid rgb(206, 208, 217)",
        padding: "12px",
        backgroundColor: "#fff",
        borderRadius: "0",
      }}
      variant="flat"
    >
      <Grid.Container justify="space-between">
        <Text size={13} color="gray" css={{ m: "0" }}>
          Expected Output
        </Text>
        <Text b size={13} color="gray" css={{ m: "0" }}>
          {output}
        </Text>
      </Grid.Container>
      <Grid.Container css={{ mt: "1px", mb: "10px" }} justify="space-between">
        <Text size={13} color="gray" css={{ m: "0" }}>
          Price Impact
        </Text>
        <Text b size={13} color="gray" css={{ m: "0" }}>
          {priceImpact}
        </Text>
      </Grid.Container>
      <hr />
      <Grid.Container css={{ mt: "10px" }} justify="space-between">
        <Text size={13} color="gray" css={{ m: "0" }}>
          Minimum received after slippage ({slippage})
        </Text>
        <Text b size={13} color="gray" css={{ m: "0" }}>
          {minimumReceived}
        </Text>
      </Grid.Container>
      <Grid.Container css={{ mt: "1px" }} justify="space-between">
        <Text size={13} color="gray" css={{ m: "0" }}>
          Network Fee
        </Text>
        <Text b size={13} color="gray" css={{ m: "0" }}>
          {networkFee}
        </Text>
      </Grid.Container>
    </Card>
  );
};

export default SummaryCard;
