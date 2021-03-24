import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img } from "../components/utils";
import PizzaTopImg from "../components/pizzaTopImg";
import { PizzaCrust, PizzaSizeCard } from "../components/pizzaSizeCard";
import { useContextInfo } from "../components/context";

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

  const [size, setSize] = useState(12);

  const { pizzaSize, crust } = useContextInfo();
  const [total, setTotal] = useState();

  useEffect(() => {
    onPizzaChange();
    updateTottal();
  }, [pizzaSize]);

  const onPizzaChange = () => {
    if (pizzaSize == "Small") {
      setSize(10);
    } else if (pizzaSize == "Medium") {
      setSize(12);
    } else {
      setSize(14);
    }
  };

  const updateTottal = () => {
    let newTotal;
    if (pizzaSize == "Small") {
      newTotal = 8;
    } else if (pizzaSize == "Medium") {
      newTotal = 10;
    } else {
      newTotal = 12;
    }

    setTotal(newTotal);
  };

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
            <H1 weight={700}>${total}.00</H1>
          </Flex>
          <Box textAlign="left" color="#FFFFFF4D">
            size, crust, toppings
          </Box>
        </TopArea>
        <Box height="200px">
          <PizzaTopImg size={size} />
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
