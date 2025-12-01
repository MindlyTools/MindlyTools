import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/calculator.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Calculator() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  console.log(input);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => setInput("");

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleAdvanced = (type) => {
    try {
      let num = parseFloat(input);

      switch (type) {
        case "sqrt":
          setInput(Math.sqrt(num).toString());
          break;
        case "square":
          setInput((num * num).toString());
          break;
        case "inverse":
          setInput((1 / num).toString());
          break;
        case "percent":
          setInput((num / 100).toString());
          break;
        case "negate":
          setInput((num * -1).toString());
          break;
        default:
          break;
      }
    } catch {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="calc-background">
        <Header />
        <div className="calc-bg">
          <div className="calc-container">
            <div className="calc-display">{input || "0"}</div>

            <div className="calc-buttons">
              <button
                onClick={() => handleAdvanced("percent")}
                className="calc-btn"
              >
                %
              </button>
              <button
                onClick={() => handleAdvanced("sqrt")}
                className="calc-btn"
              >
                √
              </button>
              <button
                onClick={() => handleAdvanced("square")}
                className="calc-btn"
              >
                x²
              </button>
              <button
                onClick={() => handleAdvanced("inverse")}
                className="calc-btn"
              >
                1/x
              </button>

              <button onClick={clearInput} className="C-button calc-btn">
                C
              </button>
              <button onClick={deleteLast} className="calc-btn">
                ⌫
              </button>
              <button
                onClick={() => handleAdvanced("negate")}
                className="calc-btn"
              >
                ±
              </button>
              <button onClick={() => handleClick("/")} className="calc-btn">
                ÷
              </button>

              {[7, 8, 9].map((n) => (
                <button
                  key={n}
                  onClick={() => handleClick(n)}
                  className="calc-btn"
                >
                  {n}
                </button>
              ))}
              <button onClick={() => handleClick("*")} className="calc-btn">
                ×
              </button>

              {[4, 5, 6].map((n) => (
                <button
                  key={n}
                  onClick={() => handleClick(n)}
                  className="calc-btn"
                >
                  {n}
                </button>
              ))}
              <button onClick={() => handleClick("-")} className="calc-btn">
                −
              </button>

              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => handleClick(n)}
                  className="calc-btn"
                >
                  {n}
                </button>
              ))}
              <button onClick={() => handleClick("+")} className="calc-btn">
                +
              </button>

              <button
                onClick={() => handleClick("0")}
                className="calc-btn zero"
              >
                0
              </button>
              <button onClick={() => handleClick(".")} className="calc-btn">
                .
              </button>
              <button onClick={calculate} className="equal calc-btn">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
