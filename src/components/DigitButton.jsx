import React from "react";
import { Button } from "@mui/material";

import { ACTIONS } from "../redux/reduxLogic";

export default const DigitButton = ({ dispatch, digit }) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }}
    >
      {digit}
    </Button>
  );
};
