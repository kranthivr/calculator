import React from "react";
import { Stack, Button, Grid } from "@mui/material";

const Buttons = ({ updateCalc }) => {
  return (
    <Stack alignItems="center" spacing={0.5}>
      <Stack direction="row" spacing={1}>
        <Button
          onClick={() => updateCalc("bsp")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          &#8592;
        </Button>
        <Button
          onClick={() => updateCalc("change-sign")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          -/+
        </Button>
        <Button
          onClick={() => updateCalc("sqrt")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          &radic;
        </Button>
        <Button
          onClick={() => updateCalc("AC")}
          sx={{
            backgroundColor: "#ef5350",
            "&:hover": {
              backgroundColor: "#b61827",
            },
          }}
          variant="contained"
        >
          AC
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => updateCalc("7")} variant="contained">
          7
        </Button>
        <Button onClick={() => updateCalc("8")} variant="contained">
          8
        </Button>
        <Button onClick={() => updateCalc("9")} variant="contained">
          9
        </Button>
        <Button
          onClick={() => updateCalc("/")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          &divide;
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => updateCalc("4")} variant="contained">
          4
        </Button>
        <Button onClick={() => updateCalc("5")} variant="contained">
          5
        </Button>
        <Button onClick={() => updateCalc("6")} variant="contained">
          6
        </Button>
        <Button
          onClick={() => updateCalc("*")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          &times;
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => updateCalc("1")} variant="contained">
          1
        </Button>
        <Button onClick={() => updateCalc("2")} variant="contained">
          2
        </Button>
        <Button onClick={() => updateCalc("3")} variant="contained">
          3
        </Button>
        <Button
          onClick={() => updateCalc("-")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          -
        </Button>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Button onClick={() => updateCalc("0")} variant="contained">
          0
        </Button>
        <Button onClick={() => updateCalc(".")} variant="contained">
          .
        </Button>

        <Button
          onClick={() => updateCalc("equals")}
          sx={{
            backgroundColor: "#00897b",
            "&:hover": {
              backgroundColor: "#005b4f",
            },
          }}
          variant="contained"
        >
          =
        </Button>

        <Button
          onClick={() => updateCalc("+")}
          sx={{
            backgroundColor: "#26a69a",
            "&:hover": {
              backgroundColor: "#00766c",
            },
          }}
          variant="contained"
        >
          +
        </Button>
      </Stack>
    </Stack>
  );
};

export default Buttons;
