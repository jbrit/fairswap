import { Image, Input, Modal, Spacer, Text } from "@nextui-org/react";
import { FC, useState } from "react";
import { ITokensModalProps } from "./TokensModal.types";
import styles from "$styles/Swap.module.css";
import { tokens } from "$utils/data";

const TokensModal: FC<ITokensModalProps> = ({
  setVisible,
  visible,
  selectedToken,
  setSelectedToken,
  selectedTokenAlt,
  setSelectedTokenAlt,
}) => {
  const closeHandler = () => {
    setVisible(false);
  };
  const [search, setSearch] = useState<string>("");

  const searchedTokens = tokens.filter((item) =>
    search ? search.toLowerCase() === item.currency.toLowerCase() : true
  );

  return (
    <Modal
      closeButton
      aria-labelledby="tokens-modal-title"
      open={visible}
      onClose={closeHandler}
      id="tokens-modal"
    >
      <Modal.Header
      // css={{
      //   display: "flex",
      //   justifyContent: "space-between",
      // }}
      >
        <Text b size={18}>
          Select token
          {/* <Text b size={18}>
            token
          </Text> */}
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          size="lg"
          css={{
            "& input": {
              px: "15px",
              py: "10px",
            },
          }}
          type="search"
          placeholder="Search token name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className={styles.tokenList}>
          {searchedTokens.length ? (
            searchedTokens.map(({ currency, img, name }) => (
              <li
                onClick={() => {
                  if (selectedTokenAlt?.name === name) {
                    setSelectedToken({ currency, img, name });
                    setSelectedTokenAlt(selectedToken);
                  }
                  setSelectedToken({ currency, img, name });
                  closeHandler();
                }}
                key={currency}
                className={
                  selectedToken?.name !== name
                    ? styles.tokenListItem
                    : styles.tokenListItemSelected
                }
              >
                <div className={styles.img}>
                  <Image
                    width={36}
                    height={36}
                    src={`/tokens/${img}`}
                    alt=""
                    objectFit="cover"
                  />
                </div>
                <div>
                  <Text h6 size={16} color="black" css={{ mb: "1px" }}>
                    {name}
                  </Text>
                  <Text size={12} color="gray" css={{ m: "0" }}>
                    {currency}
                  </Text>
                </div>
              </li>
            ))
          ) : (
            <Text css={{ textAlign: "center" }}>No results found</Text>
          )}
        </ul>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default TokensModal;
