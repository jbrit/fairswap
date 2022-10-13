import { styled } from "@nextui-org/react";
// used as a wrapper for the navbar variants radio buttons
export const VariantsNavigationBarWrapper = styled("div", {
  position: "fixed",
  width: "90%",
  bottom: "30px",
  display: "flex",
  justifyContent: "space-between",
  zIndex: "1000",
  left: "50%",
  transform: "translateX(-50%)",
});
