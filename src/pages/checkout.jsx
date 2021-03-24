import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Footer, TopArea } from "../components/appBg";
import { Box, Button, Flex, Img } from "../components/utils";

import { ReactComponent as IconCart } from "../icons/graycart.svg";
import { ReactComponent as IconPin } from "../icons/pin.svg";
import { ReactComponent as IconEdit } from "../icons/edit.svg";
import { ReactComponent as IconWalet } from "../icons/walet.svg";
import Radio from "../components/radio";
import { useContextInfo } from "../components/context";

const visa = require("../icons/visa.png");

export default function Checkout(props) {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);
  const { pizzaSize, crust } = useContextInfo();

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
    <Box>
      <Box bg="#E5E5E5">
        <TopArea height="170px">
          <Box width="50%" textAlign="left" color="#fff">
            <Box>
              <IconCart width="30px" height="30px" />
            </Box>
            <Box fontSize="25px" fontWeight={300}>
              Checkout
            </Box>
          </Box>
        </TopArea>
        <Box px="20px" position="relative" top={-95}>
          <DeliveryCard>
            <Box>
              <Flex py={2}>
                <Box>
                  <IconPin width="20px" />
                </Box>
                <Box px={2} color="#F5313F" fontSize="20px" fontWeight={700}>
                  Delivery Address
                </Box>
                <Box ml="auto">
                  <Box
                    p="4px 2px"
                    width="25px"
                    borderRadius="50%"
                    background="linear-gradient(107.9deg, #F5313F 1.55%, #FFA360 94.08%);"
                    style={{
                      boxShadow: "0px 6px 25px rgba(245, 49, 63, 0.4)",
                    }}
                    textAlign="center"
                  >
                    <IconEdit width="12px" />
                  </Box>
                </Box>
              </Flex>
              <Box fontSize="14px" fontWeight={700}>
                Home
              </Box>
              <Box fontSize="14px" fontWeight={300} pb={3}>
                3728 Brand Road, Swift Current
              </Box>
            </Box>
            <Box
              border="0.5px solid #DADAE5"
              borderLeftWidth={0}
              borderRightWidth={0}
              py={3}
            >
              + Add delivery instruction
            </Box>
            <Box py={3}>
              <Flex>
                <Box fontSize="14px" fontWeight={700}>
                  Contactless Delivery:
                </Box>
                <Box ml="auto">
                  <Radio
                    isChecked={isChecked}
                    setIsChecked={(val) => setIsChecked(val)}
                  />
                </Box>
                <Box></Box>
              </Flex>
              <Box fontSize="14px" fontWeight={300} pb={3}>
                Rider will place order at your door
              </Box>
            </Box>
          </DeliveryCard>
        </Box>
        <Box px="20px" my={3} position="relative" top={-95}>
          <DeliveryCard>
            <Box>
              <Flex py={2}>
                <Box>
                  <IconWalet width="20px" />
                </Box>
                <Box px={2} color="#F5313F" fontSize="20px" fontWeight={700}>
                  Payment method
                </Box>
                <Box ml="auto">
                  <Box
                    p="4px 2px"
                    width="25px"
                    borderRadius="50%"
                    background="linear-gradient(107.9deg, #F5313F 1.55%, #FFA360 94.08%);"
                    style={{
                      boxShadow: "0px 6px 25px rgba(245, 49, 63, 0.4)",
                    }}
                    textAlign="center"
                  >
                    <IconEdit width="12px" />
                  </Box>
                </Box>
              </Flex>

              <Flex alignItems="center">
                <Box>
                  <Img style={{ width: "28px" }} src={visa}></Img>
                </Box>
                <Box px={2}>
                  <Box fontSize="10px" fontWeight={700}>
                    VISA
                  </Box>
                  <Box fontSize="14px" fontWeight={400}>
                    ...0145
                  </Box>
                </Box>
                <Box fontSize="14px" fontWeight={700} ml="auto">
                  ${totalPrice.toFixed(2)}
                </Box>
              </Flex>
              <Box py={2}>
                <Button
                  style={{
                    color: "#57C168",
                    fontSize: "10px",
                    fontWeight: "bold",
                    width: "166px",
                    background: "#DEF3E1",
                    borderRadius: "10px",
                    height: "26px",
                  }}
                >
                  10% Cashback Applied
                </Button>
              </Box>
            </Box>
          </DeliveryCard>
        </Box>
      </Box>
      <Footer>
        <Box
          color="white"
          fontWeight="bold"
          fontSize="15px"
          py="21px"
          onClick={() => history.push("/shipping")}
        >
          Place Order
        </Box>
      </Footer>
    </Box>
  );
}

function DeliveryCard(props) {
  const { children } = props;
  return (
    <Box
      bg="#ffffffcc"
      borderRadius="20px"
      style={{
        backdropFilter: "blur(20px)",
      }}
      px={3}
      color="#6D6E9C"
      textAlign="left"
      lineHeight="20px"
      py={3}
    >
      {children}
    </Box>
  );
}
