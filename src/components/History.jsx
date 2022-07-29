import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";

const History = ({ historyObject, history }) => {
  const [valFromHistory, setValFromHistory] = React.useState("");

  const handleChange = (event) => {
    setValFromHistory(event.target.value);
  };

  return (
    <Stack margin={2} alignItems="center">
      <FormControl>
        <InputLabel id="history-select-label">History</InputLabel>
        <Select
          sx={{
            minWidth: "18rem",
          }}
          labelId="history-select-label"
          id="history-select"
          label="History"
          value={valFromHistory}
          onChange={handleChange}
        >
          {history.map((item) => (
            <MenuItem key={item.hId} value={item.ans}>
              {item.operation} = {item.ans}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default History;
