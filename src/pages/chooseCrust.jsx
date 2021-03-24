import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer, TopArea } from "../components/appBg";
import { Box, Flex, Text } from "../components/utils";
import PizzaTopImg from "../components/pizzaTopImg";
import { PizzaCrust } from "../components/pizzaSizeCard";
import { useContextInfo } from "../components/context";

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: white;
  font-weight: ${(props) => props.weight};
`;

export default function ChooseCrust(props) {
  const history = useHistory();

  const [crustSize, setCrustSize] = useState("+$2.00");
  const { pizzaSize, crust } = useContextInfo();
  const [total, setTotal] = useState();

  useEffect(() => {
    onPizzaChange();
    updateTottal();
  }, [crust]);

  const onPizzaChange = () => {
    if (crust == "Thin") {
      setCrustSize("+$2.00");
    } else {
      setCrustSize("+$4.00");
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
    if (crust == "Thin") {
      newTotal = newTotal + 2;
    } else {
      newTotal = newTotal + 4;
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
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {pizzaSize}
            </Text>
            , crust, toppings
          </Box>
        </TopArea>
        <Box height="200px">
          <PizzaTopImg size={crustSize} />
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
