import NavigationBar from "$components/Navigationbar/Navigationbar";
import Empty from "$svgs/empty";
import {
  Button,
  Card,
  Grid,
  Image,
  Input,
  Spacer,
  Text,
} from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Swap.module.css";

const Pool: NextPage = () => {
  return (
    <div className={styles.swapPage}>
      <Head>
        <title>Pools</title>
        <meta name="swap" content="Pools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar active="pool" />
      <>
        <Spacer y={2} />
        <Grid.Container
          wrap="nowrap"
          justify="space-between"
          alignItems="center"
          css={{ mb: "30px", mw: "768px", mx: "auto" }}
        >
          <Text h2 b size={30} color="black" css={{ m: 0 }}>
            Pool
          </Text>
          <Link href="/add-pool">
            <a>
              <Button auto>Add new position</Button>
            </a>
          </Link>
        </Grid.Container>
        <Card
          css={{
            h: "max-content",
            mx: "auto",
            mw: "768px",
            py: "30px",
          }}
        >
          <Card.Body
            css={{
              p: "$10",
              h: "max-content",
            }}
          >
            <Grid.Container
              css={{ flexDirection: "column" }}
              alignItems="center"
            >
              <Empty />
              <Text
                color="gray"
                b
                size={16}
                css={{ mb: "15px", textAlign: "center" }}
              >
                Your active liquidity positions will show here
              </Text>
            </Grid.Container>
          </Card.Body>
        </Card>
        <Spacer y={10} />
      </>
    </div>
  );
};

export default Pool;
