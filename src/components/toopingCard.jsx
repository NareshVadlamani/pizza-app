import React from "react";
import { Box, Flex, Img } from "./utils";

const mushRoom = require("../images/mushrooms.png");
const pepperoni = require("../images/pepperoni.png");

const toopingList = [
  {
    name: "Pepperoni",
    price: 0,
    src: pepperoni,
  },
  {
    name: "MushRoom",
    price: 0,
    src: mushRoom,
  },
  {
    name: "Pepperoni",
    price: 0,
    src: pepperoni,
  },
  {
    name: "MushRoom",
    price: 0,
    src: mushRoom,
  },
  {
    name: "Pepperoni",
    price: 0,
    src: pepperoni,
  },
  {
    name: "MushRoom",
    price: 0,
    src: mushRoom,
  },
];

export default function ToopingCard(props) {
  return (
    <Flex
      py={2}
      style={{
        overflowX: "scroll",
        justifyContent: "center",
      }}
    >
      {toopingList.map((topping, i) => {
        const { src, name, price } = topping;
        return (
          <Flex
            key={i}
            mx={2}
            border="0.5px solid #DADAE5"
            style={{
              boxShadow: "0px 4px 15px rgba(218, 218, 229, 0.2)",
              boxSizing: "border-box",
            }}
            borderRadius="20px"
            alignItems="center"
            bg="#fff"
          >
            <Box fill={2} px={2}>
              <Img src={src}></Img>
            </Box>
            <Box fill={3} px={2}>
              <Box color="#6D6E9C" fontSize="14px" fontWeight={700}>
                {name}
              </Box>
              <Box color="#6D6E9C" fontSize="14px" fontWeight={300}>
                + ${price}.00
              </Box>
            </Box>
            <Box fill={1} px={2}>
              {/* <IconTick width="20px" height="20px" /> */}
              <Box
                bg="#F4F3F9"
                width="20px"
                height="20px"
                borderRadius="50%"
              ></Box>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}
