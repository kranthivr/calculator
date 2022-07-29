import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Output from "./components/Output";
import History from "./components/History";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (value === "bsp") {
      if (calc.includes("sqrt")) {
        setCalc(Math.round(Math.pow(result, 2)).toString());
        setResult(Math.round(Math.pow(result, 2)).toString());
        return;
      }
      if (calc) {
        if (calc === "-1") {
          setCalc("");
          setResult("");
          return;
        }

        if (calc.length === 2 && calc.charAt(0) === "-") {
          setCalc("-1");
          setResult("-1");
          return;
        }

        if (ops.includes(calc.charAt(calc.length - 2))) {
          setResult(calc.substring(0, calc.length - 2));
          setCalc(calc.substring(0, calc.length - 1));
          return;
        }
        setCalc(calc.substring(0, calc.length - 1));
        setResult(calc.substring(0, calc.length - 1));
      }
      return;
    }

    if (value === "change-sign") {
      if (calc.includes("sqrt")) {
        setCalc((-1 * Number(result)).toString());
        setResult((-1 * Number(result)).toString());
        return;
      }
      if (calc) {
        if (Number(calc) < 0) {
          setCalc(calc.substring(1));
          setResult(calc.substring(1));
          return;
        }
        setCalc("-" + calc);
        setResult("-" + calc);
      }
      return;
    }

    if (value === "sqrt") {
      if (ops.includes(calc.slice(-1))) {
        return;
      }
      if (calc && result && result >= 0) {
        setResult(Math.sqrt(result).toString());
        setCalc(`sqrt(${calc})`);
      }
      return;
    }

    if (value === "AC") {
      setCalc("");
      setResult("");
      return;
    }

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (value === "equals") {
      if (history.length >= 10 && calc && result) {
        const tempArray = history.slice(1, 10);
        setHistory([
          ...tempArray,
          {
            hId: Date.now(),
            operation: calc,
            ans: result,
          },
        ]);
        return;
      }
      if (calc && result) {
        setHistory([
          ...history,
          {
            hId: Date.now(),
            operation: calc,
            ans: result,
          },
        ]);
        setCalc(result);
        setResult(result);
      }
      return;
    }

    if (ops.includes(value) && calc.includes("sqrt")) {
      if (value === ".") return;
      setCalc(result + value);
      return;
    }

    if (value === ".") {
      if (/[/*+-]\d+$/g.test(calc)) {
        setCalc(calc + value);
        return;
      } else if (/(?<=)\.\d/g.test(calc)) {
        return;
      }
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      if (calc.includes("sqrt")) {
        setCalc(result + calc.slice(-1) + value);
        console.log(calc);
        setResult(eval(calc).toString());
        return;
      }
      setResult(eval(calc + value).toString());
    }
  };

  const historyUpdate = (calc, result) => {
    setHistoryObject({
      ans: result,
      operation: `sqrt(${calc})`,
    });
    return;
  };

  return (
    <>
      <Typography variant="h4" fontFamily="Orbitron" textAlign="center">
        Calculator
      </Typography>
      <Output result={result ? result : ""} calc={calc || "0"} />
      <Buttons updateCalc={updateCalc} />
      <History history={history} />
    </>
  );
}

export default App;
