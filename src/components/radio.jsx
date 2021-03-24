import React from "react";
import { Box, Input } from "./utils";

export default function Radio(props) {
  const { isChecked = false, setIsChecked } = props;
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Box className="switch-container">
      <label>
        <Input
          checked={isChecked}
          onChange={() => handleChange()}
          className="switch"
          type="checkbox"
          style={{
            width: "38px",
          }}
        />
        <Box>
          <Box></Box>
        </Box>
      </label>
    </Box>
  );
}
