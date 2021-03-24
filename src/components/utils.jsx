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
// import ajaxUtils from "./network/ajax-utils";
import { ReactComponent as IconClose } from "../icons/x.svg";

const ccProps = ["showFor", "asCard"];

const forwardProp = (propName) =>
  shouldForwardProp(propName) && !ccProps.includes(propName);

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

export const Select = styled("select", { shouldForwardProp: forwardProp })({
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

export const TextArea = styled("textarea", { shouldForwardProp: forwardProp })({
  fontFamily,
  fontSize,
});

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
export const FlexWrap = styled(Base)(
  { display: "flex", flexWrap: "wrap" },
  asCard,
  showForProp("flex")
);
export const Spacer = styled("div", { shouldForwardProp: forwardProp })(space);

export function Grid(props) {
  // https://stackoverflow.com/a/39862756/73630
  const { gutter, itemWidth, itemProps, children } = props;
  const calcItemWidth = itemWidth.map((iw, idx) => {
    return `calc(${iw}*100%  - (1 - ${iw})*${gutter[idx]}px)`;
  });
  return (
    <FlexWrap justifyContent="flex-start" width={1}>
      {React.Children.map(children, (child, ci) => (
        <Box width={calcItemWidth} {...itemProps} key={ci}>
          {child}
        </Box>
      ))}
    </FlexWrap>
  );
}

export function Overlay(props) {
  const { onOverlayClick, children, zIndex } = props;
  return (
    <Box
      onClick={() => onOverlayClick()}
      style={{
        position: "fixed",
        height: "100vh",
        background: "#00000099",
        top: 0,
        bottom: 0,
        width: "100%",
        zIndex,
        left: 0,
        right: 0,
      }}
    >
      {" "}
      {children}
    </Box>
  );
}

// export function OverlayHolder(props) {
//   const { width = "500", children, param, isClose = true } = props;
//   const { pushQuery, qObj, clear } = ajaxUtils.useHistoryRouter();
//   return (
//     <Overlay zIndex={1} onOverlayClick={() => pushQuery({ [param]: "" })}>
//       <Box
//         width={`${width}px`}
//         m="auto"
//         style={{
//           transform: `translate(calc(100% - ${width}px), -50%)`,
//           boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
//         }}
//         top="50%"
//         position="relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {isClose && (
//           <Box
//             position="absolute"
//             top="5px"
//             fontSize="16px"
//             right="5px"
//             color="#434643"
//             style={{
//               cursor: "pointer",
//               zIndex: 10,
//             }}
//             onClick={() => pushQuery({ [param]: "" })}
//           >
//             <IconClose fill="#434643" width="22px" height="22px" />
//           </Box>
//         )}
//         {children}
//       </Box>
//     </Overlay>
//   );
// }

const customIndexOf = (arr, q) =>
  arr.findIndex((item) => q.toLowerCase() === item.toLowerCase());

export const getAlterText = (value, location) => {
  const mainVal = value.toLowerCase();
  const locaVal = location.toLowerCase();

  const val =
    mainVal.slice(0, mainVal.indexOf(locaVal)) +
    "<b>" +
    locaVal +
    "</b>" +
    mainVal.slice(mainVal.indexOf(locaVal) + locaVal.length, mainVal.length);

  // const mainVal = value;
  // const locaVal = location;
  // const val =
  //   mainVal.slice(0, customIndexOf(mainVal, locaVal)) +
  //   "<b>" +
  //   locaVal +
  //   "</b>" +
  //   mainVal.slice(
  //     customIndexOf(mainVal, locaVal) + locaVal.length,
  //     mainVal.length
  //   );

  return (
    <span
      style={{ textTransform: "capitalize" }}
      dangerouslySetInnerHTML={{ __html: val }}
    />
  );
};

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
