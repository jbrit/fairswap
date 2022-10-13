import LiquiditySummary from "$components/LiquiditySummary/LiquiditySummaryProps";
import NavigationBar from "$components/Navigationbar/Navigationbar";
import SettingsPopover from "$components/SettingsPopover/SettingsPopover";
import SwapCard from "$components/SwapCard/SwapCard";
import TokensModal from "$components/TokensModal/TokensModal";
import ArrowBack from "$svgs/arrow_back";
import ArrowDown from "$svgs/arrow_down";
import { Token } from "$types/global";
import { Button, Card, Grid, Image, Spacer, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Swap.module.css";

const AddPool: NextPage = () => {
  const [tokensModalOne, setTokensModalOne] = useState<boolean>(false);
  const [selectedTokenOne, setSelectedTokenOne] = useState<Token | null>(null);
  const [amountOne, setAmountOne] = useState<string>("0.0");
  const [tokensModalTwo, setTokensModalTwo] = useState<boolean>(false);
  const [selectedTokenTwo, setSelectedTokenTwo] = useState<Token | null>(null);
  const [amountTwo, setAmountTwo] = useState<string>("0.0");

  const router = useRouter();

  return (
    <div className={styles.swapPage}>
      <Head>
        <title>Add to pool</title>
        <meta name="swap" content="Add to pool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar active="pool" />
      <>
        <Spacer y={2} />
        <Card
          css={{
            h: "max-content",
            mx: "auto",
            mw: "400px",
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
              css={{ mb: "30px" }}
            >
              <button onClick={() => router.back()}>
                <ArrowBack />
              </button>
              <Text h2 size={20} color="black" css={{ m: 0 }}>
                Add Liquidity
              </Text>
              <SettingsPopover />
            </Grid.Container>
            <Text
              css={{
                backgroundColor: "$colors$blue300",
                borderRadius: "10px",
                p: "10px",
                mb: "20px",
              }}
              size={14}
            >
              Tip: When you add liquidity, you will receive pool tokens
              representing your position. These tokens automatically earn fees
              proportional to your share of the pool, and can be redeemed at any
              time.
            </Text>
            <SwapCard
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
              balance="0.000452"
            />
            <Spacer y={1} />
            <SwapCard
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
              balance="0"
            />
            <Spacer y={1} />
            <LiquiditySummary
              liquidityOne="0.00000875862"
              liquidityTwo="114173"
              share="0%"
              tokenOne={selectedTokenOne?.currency ?? ""}
              tokenTwo={selectedTokenTwo?.currency ?? ""}
            />
            <Spacer y={1} />
            <Button
              css={{
                h: "50px",
              }}
              // onClick={() => setConfirmSwapModal(true)}
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

export default AddPool;
