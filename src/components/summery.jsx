import React from "react";
import { Box, Flex } from "./utils";

import { ReactComponent as IconCart } from "../icons/cart.svg";
import { useContextInfo } from "./context";

export default function Summery(props) {
  const { pizzaSize, crust, tooping } = useContextInfo();
  let sizePrice;
  let crustPrice;
  if (pizzaSize == "Small") {
    sizePrice = 8;
  } else if (pizzaSize == "Medium") {
    sizePrice = 10;
  } else {
    sizePrice = 12;
  }
  if (crust == "Thin") {
    crustPrice = 2;
  } else {
    crustPrice = 4;
  }
  const totalPrice = sizePrice + crustPrice + 0.5;
  return (
    <Box
      bg="#ffffff99"
      width={210}
      p="30px 20px"
      borderTopRightRadius="20px"
      borderBottomRightRadius="20px"
      style={{
        backdropFilter: "blur(20px)",
      }}
    >
      <Box textAlign="left" py={2}>
        <Box>
          <IconCart />
        </Box>
        <Box color="#F5313F" fontSize="10px" fontWeight={700}>
          ORDER SUMMARY
        </Box>
      </Box>
      <Box
        border="0.5px solid #DADAE5"
        borderLeftWidth={0}
        borderRightWidth={0}
        py={2}
      >
        <ListItem name={`${pizzaSize} Size`} price={`$${sizePrice}.00`} />
        <ListItem name={`${crust} Size`} price={`$${crustPrice}.00`} />

        <ListItem name="Pepporani" price="0.00" />
        <ListItem name="Black Olives" price="0.00" />
        <ListItem name="Onions" price="$0.50" />
      </Box>
      <Box py={2}>
        <Flex color="#6D6E9C" justifyContent="space-between" lineHeight="20px">
          <Box fontSize="14px" fontWeight={400}>
            Total
          </Box>
          <Box fontSize="20px" fontWeight={300}>
            ${totalPrice}.00
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function ListItem(props) {
  const { name, price } = props;
  return (
    <Flex color="#6D6E9C" justifyContent="space-between" lineHeight="20px">
      <Box fontSize="14px" fontWeight={400}>
        {name}
      </Box>
      <Box fontSize="10px" fontWeight={700}>
        {price}
      </Box>
    </Flex>
  );
}
