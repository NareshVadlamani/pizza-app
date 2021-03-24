import React, { useState } from "react";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img, Text } from "../components/utils";
import PizzaTopImg from "../components/pizzaTopImg";
import { PizzaCrust, PizzaSizeCard } from "../components/pizzaSizeCard";
import { useContextInfo } from "../components/context";

const thinPizza = require("../images/pizza.png");
const thickPizza = require("../images/thickPizza.png");

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: white;
  font-weight: ${(props) => props.weight};
`;

export default function ChooseCrust(props) {
  const { height, children } = props;
  const [crust, setCrust] = useState("Thin");
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
          <PizzaTopImg img={crust == "Thin" ? thinPizza : thickPizza} />
        </Box>
        <Box position="" p="10px 20px">
          <PizzaCrust crust={crust} onSizeChange={(val) => setCrust(val)} />
        </Box>
      </Box>
      <Footer>
        <Box color="white" fontWeight="bold" fontSize="15px" py="21px">
          Next
        </Box>
      </Footer>
    </Box>
  );
}
