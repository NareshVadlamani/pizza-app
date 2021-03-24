import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import React from "react";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from "styled-system";

const cardProps = ["showFor", "asCard"];

const forwardProp = (propName) =>
  shouldForwardProp(propName) && !cardProps.includes(propName);

const fontFamily = `'Roboto', sans-serif`;
const fontSize = "15px";

export const Text = styled("span", { shouldForwardProp: forwardProp })(
  {
    fontFamily,
    fontSize,
  },
  color,
  typography
);

const Base = styled("div", { shouldForwardProp: forwardProp })(
  {
    fontFamily,
    fontSize,
  },
  space,
  layout,
  flexbox,
  color,
  typography,
  background,
  border,
  position,
  shadow
);

export const Input = styled("input", { shouldForwardProp: forwardProp })({
  fontFamily,
  fontSize,
});

export const Img = styled("img", { shouldForwardProp: forwardProp })(
  space,
  layout,
  background,
  border,
  position,
  shadow
);

// usage <Box showFor={[1, 0]}/>
const showForProp = (dflt) =>
  system({
    showFor: {
      property: "display",
      transform: (val) => (val ? dflt : "none"),
    },
  });

// usage <Box asCard />
const asCard = (props) => {
  return props.asCard
    ? {
        borderRadius: 10,
        boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }
    : {};
};

export const Box = styled(Base)(asCard, showForProp("block"));
export const Flex = styled(Base)(
  { display: "flex" },
  asCard,
  showForProp("flex")
);

export const Button = styled.button`
  margin: ${(props) => props.m};
  width: 100%;
  background: white;
  border: none;
  height: 35px;
  border-radius: 2px;
  font-size: 15px;
  font-weight: bold;
  background: ${(props) => (props.active ? "#222a3b" : "")};
`;
