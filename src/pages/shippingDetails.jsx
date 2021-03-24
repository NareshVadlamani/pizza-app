import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { TopArea } from "../components/appBg";
import { Box, Flex } from "../components/utils";

import { ReactComponent as IconBill } from "../icons/bill.svg";
import { ReactComponent as IconHome } from "../icons/home.svg";
import { ReactComponent as IconEdit } from "../icons/edit.svg";
import { ReactComponent as IconCash } from "../icons/cash.svg";
import { ReactComponent as IconRight } from "../icons/right.svg";

import { useContextInfo } from "../components/context";

const CompletedLine = styled(Box)`
  position: relative;
  left: 15px;
  width: 0px;
  border: 1px solid #f5313f;
  height: 30px;
`;

const UpCommingLine = styled(Box)`
  position: relative;
  left: 15px;
  width: 0px;
  border: 1px solid #dadae5;
  height: 30px;
`;

export default function ShippingDetails(props) {
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
              <IconBill width="30px" height="30px" />
            </Box>
            <Box fontSize="25px" fontWeight={300}>
              Order Details
            </Box>
          </Box>
        </TopArea>
        <Box px="20px" position="relative" top={-95}>
          <DeliveryCard>
            <Box pb={3} borderBottom=" 0.5px solid #A0A8CC">
              <Flex py={2} justifyContent="space-around">
                <Box>
                  <Box color="#6D6E9C" fontWeight={700} fontSize="10px">
                    ORDERED ON
                  </Box>
                  <Box px={2} color="#F5313F" fontSize="20px" fontWeight={700}>
                    14 Feb
                  </Box>
                </Box>
                <Box>
                  <Box color="#6D6E9C" fontWeight={700} fontSize="10px">
                    ORDERED ON
                  </Box>
                  <Box px={2} color="#F5313F" fontSize="20px" fontWeight={700}>
                    14 Feb
                  </Box>
                </Box>
                <Box>
                  <Box color="#6D6E9C" fontWeight={700} fontSize="10px">
                    ORDERED ON
                  </Box>
                  <Box px={2} color="#F5313F" fontSize="20px" fontWeight={700}>
                    14 Feb
                  </Box>
                </Box>
              </Flex>
            </Box>
            <Box py={5} px={2}>
              <CompletedStep
                Icon={IconEdit}
                time="11:41 AM"
                status="Order Confirmed"
              />
              <CompletedLine />
              <CompletedStep
                Icon={IconEdit}
                time="12:01 PM"
                status="Preparing...."
              />
              <UpCommingLine />
              <CommingStep Icon={IconHome} status="Dispatched" />
              <UpCommingLine />
              <CommingStep Icon={IconHome} status="In Transit" />
              <UpCommingLine />
              <CommingStep Icon={IconHome} status="Delivered" />
            </Box>
          </DeliveryCard>
        </Box>
      </Box>
      <Box px="20px" position="relative" top="-75px">
        <Box
          background="rgba(222, 243, 225, 0.5)"
          border="0.5px solid #57C168;"
          borderRadius="20px"
          style={{
            boxShadow: "0px 4px 15px rgba(218, 218, 229, 0.2)",
          }}
        >
          <Flex alignItems="center">
            <Flex px="20px">
              <Box border="1px solid #57C168" borderRadius="50%" p={2}>
                <IconCash width="20px" />
              </Box>
              <Box px={2} textAlign="left">
                <Box
                  lineHeight="20px"
                  fontSize="14px"
                  fontWeight={700}
                  color="#57C168"
                >
                  Earned cashback!
                </Box>
                <Box color="#6D6E9C" fontWeight={300} fontSize="14px">
                  + $1.45
                </Box>
              </Box>
            </Flex>
            <Box
              width="56px"
              ml="auto"
              borderLeft="1px solid #57C168"
              py="27px"
              background="rgba(87, 193, 104, 0.2)"
            >
              <IconRight width="10px" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function CompletedStep(props) {
  const { Icon, time, status } = props;
  return (
    <Flex alignItems="center">
      <Box
        background="linear-gradient(107.9deg, #F5313F 1.55%, #FFA360 94.08%);"
        borderRadius="50%"
        p="4px 9px"
        border="1px solid #F5313F"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <Icon />
      </Box>
      <Box color="#6D6E9C" lineHeight="15px" px={4}>
        <Box fontSize="10px" fontWeight={700}>
          {time}
        </Box>
        <Box fontSize="14px" fontWeight={500}>
          {status}
        </Box>
      </Box>
    </Flex>
  );
}

function CommingStep(props) {
  const { Icon, time, status } = props;
  return (
    <Flex alignItems="center">
      <Box
        background="#e8e8f2"
        borderRadius="50%"
        p="4px 9px"
        border="1px solid #e8e8f2"
        style={{
          backdropFilter: "blur(20px)",
        }}
      >
        <Icon fill="#dadae5" />
      </Box>
      <Box color="#6D6E9C" lineHeight="15px" px={4}>
        <Box fontSize="10px" fontWeight={700}>
          {time}
        </Box>
        <Box fontSize="14px" fontWeight={300}>
          {status}
        </Box>
      </Box>
    </Flex>
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
