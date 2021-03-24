import React, { useState } from "react";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img } from "../components/utils";
import PizzaTopImg from "../components/pizzaTopImg";
import { PizzaCrust, PizzaSizeCard } from "../components/pizzaSizeCard";

const pizza = require("../images/pizza.png");
// const pizza = require("../images/profile.png");

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: white;
  font-weight: ${(props) => props.weight};
`;

export default function ChooseSize(props) {
  const { history } = props;

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
            size, crust, toppings
          </Box>
        </TopArea>
        <Box height="200px">
          <PizzaTopImg img={pizza} />
        </Box>
        <Box position="" p="10px 20px">
          <PizzaSizeCard />
        </Box>
        <Footer>
          <Box
            onClick={() => history.push("/crust")}
            color="white"
            fontWeight="bold"
            fontSize="15px"
            py="21px"
          >
            Next
          </Box>
        </Footer>
      </Box>
    </Box>
  );
}
