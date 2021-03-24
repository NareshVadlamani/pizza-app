import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img, Text } from "../components/utils";
import { HalfPizzaImg } from "../components/pizzaTopImg";
import { useContextInfo } from "../components/context";

import { ReactComponent as IconPizza } from "../icons/pizza.svg";
import Summery from "../components/summery";

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: white;
  font-weight: ${(props) => props.weight};
`;

export default function ChooseCrust(props) {
  const history = useHistory();

  const { pizzaSize, crust } = useContextInfo();

  return (
    <Box>
      <Box bg="#E5E5E5">
        <TopArea height="170px">
          <Box width="50%" textAlign="left" color="#fff">
            <Box>
              <IconPizza width="30px" height="30px" />
            </Box>
            <Box fontSize="25px" fontWeight={300}>
              Check your
            </Box>
            <Box fontSize="25px" fontWeight={700}>
              custom pizaa
            </Box>
          </Box>
        </TopArea>
        {/* <Box position="relative"></Box> */}
        <Box height="500px">
          <HalfPizzaImg size={0} />
        </Box>
        <Box position="absolute" top={360}>
          <Summery />
        </Box>
      </Box>
      <Footer>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="15px"
          py="21px"
          onClick={() => history.push("/checkout")}
        >
          Confirm Pizza
        </Box>
      </Footer>
    </Box>
  );
}
