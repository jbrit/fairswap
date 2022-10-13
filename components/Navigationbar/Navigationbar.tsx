import { Button, Navbar, Switch, Text } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FC } from "react";
import { VariantsNavigationBarWrapper } from "./NavigationBar.styles";
import { NavigationBarProps } from "./NavigationBar.types";

const NavigationBar: FC<NavigationBarProps> = ({ active }) => {
  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit">
            FS
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <VariantsNavigationBarWrapper>
        <Navbar
          css={{
            div: {
              justifyContent: "center",
              height: "50px",
              minHeight: "50px",
              borderRadius: "10px",
            },
            width: "max-content",
            margin: "0 auto",
            borderRadius: "10px",
            boxShadow: "none",
            backgroundColor: "$colors$blue400",
            height: "50px",
          }}
        >
          <Navbar.Content>
            <Link href="/swap">
              <Navbar.Link
                isActive={active === "swap" ? true : false}
                color="primary"
                id="one"
              >
                Swap
              </Navbar.Link>
            </Link>
            <Link href="/pool">
              <Navbar.Link
                color="primary"
                isActive={active === "pool" ? true : false}
                id="two"
              >
                Pool
              </Navbar.Link>
            </Link>
          </Navbar.Content>
        </Navbar>
      </VariantsNavigationBarWrapper>
    </>
  );
};

export default NavigationBar;
