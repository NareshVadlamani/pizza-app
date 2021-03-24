import styled from "@emotion/styled";
import React, { useState } from "react";
import { useContextInfo } from "./context";
import { Box, Flex, Button, Text, Img } from "./utils";
import { ReactComponent as IconTick } from "../icons/tick.svg";

const mushRoom = require("../images/mushrooms.png");
const pepperoni = require("../images/pepperoni.png");

const StyeledBtn = styled(Button)`
  background: ${(props) =>
    props.active
      ? "linear-gradient(107.9deg, #f5313f 1.55%, #ffa360 94.08%)"
      : "#ffff"};
  box-shadow: ${(props) =>
    props.active ? "0px 6px 25px rgba(245, 49, 63, 0.4)" : "0px"};
  border-radius: 20px;
  color: ${(props) => (props.active ? "#fff" : "#6D6E9C")};
  width: 90px;
  outline: none;
`;

export function PizzaSizeCard(props) {
  const { setPizzaSize, pizzaSize } = useContextInfo();
  const onBtnClick = (val) => {
    setPizzaSize(val);
  };
  return (
    <Box
      borderRadius="20px"
      style={{
        boxShadow: "0px 4px 15px rgba(218, 218, 229, 0.2)",
      }}
      bg="#fff"
      p="30px 0px"
    >
      <Box py={2} color="#6D6E9C">
        <Text style={{ fontSize: "20px" }}>Choose your </Text>{" "}
        <Text style={{ fontSize: "20px", fontWeight: 700 }}>size</Text>
      </Box>
      <Flex py={2} justifyContent="space-around">
        <StyeledBtn
          active={pizzaSize == "Small"}
          onClick={() => onBtnClick("Small")}
        >
          Small
        </StyeledBtn>
        <StyeledBtn
          active={pizzaSize == "Medium"}
          onClick={() => onBtnClick("Medium")}
        >
          Medium
        </StyeledBtn>
        <StyeledBtn
          active={pizzaSize == "Large"}
          onClick={() => onBtnClick("Large")}
        >
          Large
        </StyeledBtn>
      </Flex>
    </Box>
  );
}

export function PizzaCrust(props) {
  const { crust, setCrust } = useContextInfo();
  return (
    <Box
      borderRadius="20px"
      style={{
        boxShadow: "0px 4px 15px rgba(218, 218, 229, 0.2)",
      }}
      bg="#fff"
      p="30px 0px"
    >
      <Box py={2} color="#6D6E9C">
        <Text style={{ fontSize: "20px" }}>Choose your </Text>{" "}
        <Text style={{ fontSize: "20px", fontWeight: 700 }}>crust</Text>
      </Box>
      <Flex py={2} justifyContent="space-around">
        <StyeledBtn active={crust == "Thin"} onClick={() => setCrust("Thin")}>
          Thin
        </StyeledBtn>
        <StyeledBtn active={crust == "Thick"} onClick={() => setCrust("Thick")}>
          Thick
        </StyeledBtn>
      </Flex>
    </Box>
  );
}

export function PizzaTooping(props) {
  const { tooping, setTooping } = useContextInfo();
  return (
    <Box
      borderRadius="20px"
      style={{
        boxShadow: "0px 4px 15px rgba(218, 218, 229, 0.2)",
      }}
      bg="#fff"
      height="160px"
    >
      <Box py="20px" color="#6D6E9C">
        <Box>
          <Text style={{ fontSize: "20px" }}>Choose up to </Text>{" "}
          <Text style={{ fontSize: "20px", fontWeight: 700 }}>7 toppings</Text>
        </Box>
        <Box fontSize="10px" color="#A0A8CC">
          Free 3 add-ons
        </Box>
      </Box>
    </Box>
  );
}
