import Settings from "$svgs/settings";
import { Button, Input, Popover, Text, Tooltip } from "@nextui-org/react";
import styles from "$styles/Swap.module.css";
import { useState } from "react";

const SettingsPopover = () => {
  const [slippage, setSlippage] = useState<string>("0.10");
  const [transaction, setTransaction] = useState<string>("30");

  return (
    <Popover isBordered disableShadow>
      <Popover.Trigger>
        <Button css={{ backgroundColor: "transparent", px: 0 }} auto flat>
          <Settings />
        </Button>
      </Popover.Trigger>
      <Popover.Content
        css={{
          p: "$10",
          minWidth: "270px",
          borderRadius: "7px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <Text css={{ display: "block", mb: "10px" }} b size={12}>
          Transaction settings
        </Text>
        <Text css={{ display: "block", mb: "6px" }} size={14}>
          {/* <Tooltip content={"Developers love Next.js"}> */}
          Slippage Tolerance (%)
          {/* </Tooltip> */}
        </Text>
        <input
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return;
            setSlippage(e.target.value);
          }}
          className={styles.settingsInput}
          placeholder="0.10%"
          value={slippage}
        />
        <Text css={{ display: "block", mb: "6px" }} size={14}>
          {/* <Tooltip content={"Developers love Next.js"}> */}
          Transaction deadline (minutes)
          {/* </Tooltip> */}
        </Text>
        <input
          onChange={(e) => {
            if (isNaN(Number(e.target.value))) return;
            setTransaction(e.target.value);
          }}
          className={styles.settingsInput}
          placeholder="30"
          value={transaction}
        />
      </Popover.Content>
    </Popover>
  );
};

export default SettingsPopover;
