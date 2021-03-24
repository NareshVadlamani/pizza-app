import React, { useEffect, useState } from "react";
import { Box, Flex, Img, Button } from "../components/utils";
import { useContextInfo } from "./context";
const thinPizza = require("../images/pizza.png");
const thickPizza = require("../images/thickPizza.png");
const halfPizza = require("../images/halfPizza.png");

export default function PizzaTopImg(props) {
  const { size } = props;

  const [imgPadding, setImgPadding] = useState([30, 25]);
  const { pizzaSize, crust } = useContextInfo();

  useEffect(() => {
    onPizzaChange();
  }, [pizzaSize]);

  const onPizzaChange = () => {
    if (pizzaSize == "Small") {
      setImgPadding([40, 30]);
    } else if (pizzaSize == "Medium") {
      setImgPadding([30, 25]);
    } else {
      setImgPadding([20, 15]);
    }
  };

  return (
    <Box
      position="absolute"
      top="150px"
      width="100%"
      bg="#0000000"
      borderBottom={size ? "0.5px solid #DADAE5" : "0px"}
      p={imgPadding[0]}
      style={{
        boxSizing: "border-box",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
    >
      <Box
        bg="#ffffff99"
        borderRadius="50%"
        mx="auto"
        p={imgPadding[1]}
        border="1px solid #DADAE5"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Box mx="auto" borderRadius="50%" bg="#fff" border="1px solid #DADAE5">
          <Img
            width="100%"
            src={crust == "Thin" ? thinPizza : thickPizza}
            style={{
              filter:
                "drop-shadow(0px 20px 50px rgba(255, 126, 32, 0.2)), drop-shadow(0px 4px 8px rgba(109, 110, 156, 0.4))",
            }}
          ></Img>
        </Box>
      </Box>

      {!!size && (
        <Flex
          justifyContent="center"
          style={{
            position: "absolute",
            right: 0,
            left: 0,
            bottom: "-18px",
          }}
        >
          <Box px="10px ">
            <Button
              style={{
                background: "#DADAE5",
                backdropFilter: "blur(4px)",
                borderRadius: "10px",
              }}
            >
              {size}
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export function HalfPizzaImg(props) {
  const { size } = props;

  const [imgPadding, setImgPadding] = useState([30, 25]);
  const { pizzaSize, crust } = useContextInfo();

  useEffect(() => {
    onPizzaChange();
  }, [pizzaSize]);

  const onPizzaChange = () => {
    if (pizzaSize == "Small") {
      setImgPadding([40, 30]);
    } else if (pizzaSize == "Medium") {
      setImgPadding([30, 25]);
    } else {
      setImgPadding([20, 15]);
    }
  };

  return (
    <Box
      position="absolute"
      top="150px"
      width="100%"
      bg="#0000000"
      borderBottom={size ? "0.5px solid #DADAE5" : "0px"}
      p={imgPadding[0]}
      style={{
        boxSizing: "border-box",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
    >
      <Box
        bg="#ffffff99"
        borderRadius="50%"
        mx="auto"
        p={imgPadding[1]}
        border="1px solid #DADAE5"
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <Box mx="auto" borderRadius="50%" bg="#fff" border="1px solid #DADAE5">
          <Img
            width="100%"
            src={halfPizza}
            style={{
              filter:
                "drop-shadow(0px 20px 50px rgba(255, 126, 32, 0.2)), drop-shadow(0px 4px 8px rgba(109, 110, 156, 0.4))",
            }}
          ></Img>
        </Box>
      </Box>
    </Box>
  );
}
