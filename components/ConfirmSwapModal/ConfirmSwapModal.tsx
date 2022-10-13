import { Button, Grid, Image, Modal, Spacer, Text } from "@nextui-org/react";
import { FC } from "react";
import styles from "$styles/Swap.module.css";
import { IConfirmSwapModalProps } from "./ConfirmSwapModal.types";
import SwapCard from "$components/SwapCard/SwapCard";
import Switch from "$svgs/switch";
import SummaryCard from "$components/SummaryCard/SummaryCard";

const ConfirmSwapModal: FC<IConfirmSwapModalProps> = ({
  setVisible,
  visible,
  minimumReceived,
  networkFee,
  output,
  priceImpact,
  slippage,
}) => {
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text b id="modal-title" size={18}>
          Confirm Swap
        </Text>
      </Modal.Header>
      <Modal.Body>
        <></>
        <SwapCard
          convert="$0.0768"
          token={
            <Grid.Container wrap="nowrap" alignItems="center">
              <Image
                width={20}
                height={20}
                src={`/tokens/eth.png`}
                alt=""
                objectFit="cover"
              />
              <Text css={{ m: 0, ml: "12px" }} size={20} b>
                ETH
              </Text>
            </Grid.Container>
          }
          value={<Text size={24}>0.00006</Text>}
        />
        <SwapCard
          convert=""
          token={
            <Grid.Container wrap="nowrap" alignItems="center">
              <Image
                width={20}
                height={20}
                src={`/tokens/2837.png`}
                alt=""
                objectFit="cover"
              />
              <Text css={{ ml: "12px" }} size={20} b>
                0xBTC
              </Text>
            </Grid.Container>
          }
          value={<Text size={24}>0.556359</Text>}
        />
        <SummaryCard
          minimumReceived={minimumReceived}
          networkFee={networkFee}
          output={output}
          priceImpact={priceImpact}
          slippage={slippage}
        />
        <Button
          css={{
            h: "50px",
          }}
          color="primary"
          // disabled
        >
          <Text h2 size={16} color="white" css={{ m: 0 }}>
            Confirm Swap
          </Text>
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Text size={12} i>
          Output is estimated. You will receive at least {minimumReceived} or
          the transaction will revert.
        </Text>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmSwapModal;
