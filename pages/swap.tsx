import ConfirmSwapModal from "$components/ConfirmSwapModal/ConfirmSwapModal";
import NavigationBar from "$components/Navigationbar/Navigationbar";
import SettingsPopover from "$components/SettingsPopover/SettingsPopover";
import SummaryCard from "$components/SummaryCard/SummaryCard";
import SwapCard from "$components/SwapCard/SwapCard";
import TokensModal from "$components/TokensModal/TokensModal";
import ArrowDown from "$svgs/arrow_down";
import Switch from "$svgs/switch";
import { Token } from "$types/global";
import { Button, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Swap.module.css";

const Swap: NextPage = () => {
  const [confirmSwapModal, setConfirmSwapModal] = useState(false);
  const [tokensModalOne, setTokensModalOne] = useState<boolean>(false);
  const [selectedTokenOne, setSelectedTokenOne] = useState<Token | null>(null);
  const [amountOne, setAmountOne] = useState<string>("0.0");
  const [tokensModalTwo, setTokensModalTwo] = useState<boolean>(false);
  const [selectedTokenTwo, setSelectedTokenTwo] = useState<Token | null>(null);
  const [amountTwo, setAmountTwo] = useState<string>("0.0");

  return (
    <div className={styles.swapPage}>
      <Head>
        <title>Swap tokens</title>
        <meta name="swap" content="Swap tokens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar active="swap" />
      <>
        <Spacer y={2} />
        <Card
          css={{
            h: "max-content",
            mx: "auto",
            mw: "500px",
          }}
        >
          <Card.Body
            css={{
              p: "$10",
              h: "max-content",
            }}
          >
            <Grid.Container
              wrap="nowrap"
              justify="space-between"
              alignItems="center"
              css={{ mb: "10px" }}
            >
              <Text h2 size={20} color="black" css={{ m: 0 }}>
                Swap
              </Text>
              <SettingsPopover />
            </Grid.Container>
            <SwapCard
              convert="$0.0768"
              token={
                <Button
                  css={{
                    px: "8px",
                    h: "45px",
                    backgroundColor: " $colors$blue500",
                  }}
                  auto
                  onClick={() => setTokensModalOne(true)}
                >
                  {!selectedTokenOne ? (
                    <Text h2 size={16} color="white" css={{ mx: "6px", my: 0 }}>
                      Select Token
                    </Text>
                  ) : (
                    <Grid.Container wrap="nowrap" alignItems="center">
                      <Image
                        width={20}
                        height={20}
                        src={`tokens/${selectedTokenOne.img}`}
                        alt=""
                        objectFit="cover"
                      />
                      <Text css={{ ml: "10px" }} size={18} color="white" b>
                        {selectedTokenOne.currency}
                      </Text>
                    </Grid.Container>
                  )}
                  <ArrowDown />
                </Button>
              }
              value={
                <input
                  id="amountOne"
                  className={styles.swapInput}
                  placeholder="0.0"
                  color="default"
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) return;
                    setAmountOne(e.target.value);
                  }}
                  value={amountOne}
                  // initialValue={amountOne}
                  aria-label="First token input"
                />
              }
              balance="$0.0768"
            />
            <button
              onClick={() => {
                const tokenOne = selectedTokenOne;
                const tokenTwo = selectedTokenTwo;
                setSelectedTokenOne(tokenTwo);
                setSelectedTokenTwo(tokenOne);
              }}
              className={styles.switchIcon}
            >
              <Switch />
            </button>
            <SwapCard
              convert="$0.0768"
              token={
                <Button
                  css={{
                    px: "8px",
                    h: "45px",
                    backgroundColor: " $colors$blue500",
                  }}
                  auto
                  onClick={() => setTokensModalTwo(true)}
                >
                  {!selectedTokenTwo ? (
                    <Text h2 size={16} color="white" css={{ mx: "6px", my: 0 }}>
                      Select Token
                    </Text>
                  ) : (
                    <Grid.Container wrap="nowrap" alignItems="center">
                      <Image
                        width={20}
                        height={20}
                        src={`tokens/${selectedTokenTwo.img}`}
                        alt=""
                        objectFit="cover"
                      />
                      <Text css={{ ml: "10px" }} size={18} color="white" b>
                        {selectedTokenTwo.currency}
                      </Text>
                    </Grid.Container>
                  )}
                  <ArrowDown />
                </Button>
              }
              value={
                <input
                  id="amountOne"
                  className={styles.swapInput}
                  placeholder="0.0"
                  color="default"
                  onChange={(e) => {
                    console.log(
                      Number(e.target.value),
                      typeof Number(e.target.value),
                      isNaN(Number(e.target.value))
                    );
                    if (isNaN(Number(e.target.value))) return;
                    setAmountTwo(e.target.value);
                  }}
                  value={amountTwo}
                  aria-label="swss"
                  required
                />
              }
            />
            <Spacer y={1} />
            <SummaryCard
              minimumReceived="9.06792 0xBTC"
              networkFee="~$3.54"
              output="9.11326 0xBTC"
              priceImpact="0.00%"
              slippage="0.50%"
            />
            <Spacer y={1} />
            <Button
              css={{
                h: "50px",
              }}
              color="gradient"
              onClick={() => setConfirmSwapModal(true)}
              // disabled
            >
              <Text h2 size={18} color="white" css={{ m: 0 }}>
                {/* Connect Wallet */}
                {/* Insuffiecient Balance */}
                Swap
              </Text>
            </Button>
          </Card.Body>
        </Card>
        <Spacer y={10} />
        <ConfirmSwapModal
          setVisible={setConfirmSwapModal}
          visible={confirmSwapModal}
          minimumReceived="9.06792 0xBTC"
          networkFee="~$3.54"
          output="9.11326 0xBTC"
          priceImpact="0.00%"
          slippage="0.50%"
        />
        <TokensModal
          setVisible={setTokensModalOne}
          visible={tokensModalOne}
          selectedToken={selectedTokenOne}
          setSelectedToken={setSelectedTokenOne}
          selectedTokenAlt={selectedTokenTwo}
          setSelectedTokenAlt={setSelectedTokenTwo}
        />
        <TokensModal
          setVisible={setTokensModalTwo}
          visible={tokensModalTwo}
          selectedToken={selectedTokenTwo}
          setSelectedToken={setSelectedTokenTwo}
          selectedTokenAlt={selectedTokenOne}
          setSelectedTokenAlt={setSelectedTokenOne}
        />
      </>
    </div>
  );
};

export default Swap;
