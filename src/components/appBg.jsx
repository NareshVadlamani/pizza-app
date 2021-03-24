import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex } from "./utils";
import { ReactComponent as IconBack } from "../icons/back.svg";
import { ReactComponent as IconHome } from "../icons/home.svg";

export function TopBar(props) {
  const history = useHistory();
  return (
    <Flex py="14px" position="fixed" width="100%" top={0} bg="#fff" zIndex="1">
      <Box flex={1} onClick={() => history.goBack()}>
        <IconBack />
      </Box>
      <Box
        fontWeight="300"
        flex={6}
        color=" #6D6E9C;
"
      >
        Uncle John Pizzas
      </Box>
      <Box flex={1}>
        <IconHome />
      </Box>
    </Flex>
  );
}

export function TopArea(props) {
  const { height, children } = props;
  return (
    <Box
      height={height}
      p="18px"
      background="linear-gradient(107.9deg, #F5313F 1.55%, #FFA360 94.08%);"
    >
      {children}
    </Box>
  );
}

export function Footer(props) {
  const { children } = props;
  return (
    <Box
      position="fixed"
      bottom="0px"
      width="100%"
      height="59px"
      background="linear-gradient(107.9deg, #F5313F 1.55%, #FFA360 94.08%);"
    >
      {children}
    </Box>
  );
}
