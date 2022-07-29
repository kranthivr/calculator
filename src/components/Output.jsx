import React, { useReducer } from "react";
import { Stack, Box, Typography } from "@mui/material";

const Output = ({ calc, result }) => {
  return (
    <Stack margin={2} spacing={0} alignItems="center">
      <Box
        className="result"
        textAlign="end"
        width="300px"
        height="30px"
        padding="5px 10px 5px 0"
        borderRadius="0.625rem 0.625rem 0 0"
        sx={{
          color: "#fafafa",
          backgroundColor: "#212121",
        }}
      >
        {calc}
      </Box>
      <Box
        className="calc"
        padding="0 10px 0 0"
        textAlign="end"
        width="300px"
        height="30px"
        borderRadius="0 0 0.625rem 0.625rem"
        sx={{
          color: "#fafafa",
          backgroundColor: "#212121",
        }}
      >
        {result ? <>= {result}</> : <></>}
      </Box>
    </Stack>
  );
};

export default Output;
