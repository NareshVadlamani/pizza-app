import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img, Text } from "../components/utils";
import PizzaTopImg from "../components/pizzaTopImg";
import { PizzaCrust, PizzaSizeCard } from "../components/pizzaSizeCard";
import { useContextInfo } from "../components/context";

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: white;
  font-weight: ${(props) => props.weight};
`;

export default function ChooseCrust(props) {
  const history = useHistory();

  const { pizzaSize } = useContextInfo();
  return (
    <Box>
      <Box bg="#E5E5E5">
        <TopArea height="287px">
          <Flex
            style={{
              justifyContent: "space-between",
            }}
          >
            <H1 weight={300}>Create Your Pizza</H1>
            <H1 weight={700}>$10.00</H1>
          </Flex>
          <Box textAlign="left" color="#FFFFFF4D">
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {pizzaSize}
            </Text>
            , crust, toppings
          </Box>
        </TopArea>
        <Box height="200px">
          <PizzaTopImg />
        </Box>
        <Box position="" p="10px 20px">
          <PizzaCrust />
        </Box>
      </Box>
      <Footer>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="15px"
          py="21px"
          onClick={() => history.push("/topping")}
        >
          Next
        </Box>
      </Footer>
    </Box>
  );
}
