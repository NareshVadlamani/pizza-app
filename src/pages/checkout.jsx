import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Footer, TopArea, TopBar } from "../components/appBg";
import { Box, Button, Flex, Img, Text } from "../components/utils";

import { ReactComponent as IconCart } from "../icons/graycart.svg";
import { ReactComponent as IconPin } from "../icons/pin.svg";
import { ReactComponent as IconEdit } from "../icons/edit.svg";

export default function Checkout(props) {
  const history = useHistory();

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
        <Box px="20px">
          <DeliveryCard>
            <Box>
              <Flex py={3}>
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
            <Flex>
              <Box fontSize="14px" fontWeight={700}>
                Contactless Delivery:
              </Box>
              <Box></Box>
            </Flex>
            <Box fontSize="14px" fontWeight={300} pb={3}>
              Rider will place order at your door
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
          onClick={() => history.push("/orderDetails")}
        >
          Confirm Pizza
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
    >
      {children}
    </Box>
  );
}
