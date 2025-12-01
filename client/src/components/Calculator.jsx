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
      <Header />
      <div className="calc-background">
        <div>
          <button className="calc-back btn" onClick={() => navigate("/")}>
            ↩ Main menu
          </button>
        </div>
        <div className="calc-container">
          <div className="calc-display">{input || "0"}</div>

          <div className="calc-buttons">
            <button onClick={() => handleAdvanced("percent")}>%</button>
            <button onClick={() => handleAdvanced("sqrt")}>√</button>
            <button onClick={() => handleAdvanced("square")}>x²</button>
            <button onClick={() => handleAdvanced("inverse")}>1/x</button>

            <button onClick={clearInput} className="C-button">
              C
            </button>
            <button onClick={deleteLast}>⌫</button>
            <button onClick={() => handleAdvanced("negate")}>±</button>
            <button onClick={() => handleClick("/")}>÷</button>

            {[7, 8, 9].map((n) => (
              <button key={n} onClick={() => handleClick(n)}>
                {n}
              </button>
            ))}
            <button onClick={() => handleClick("*")}>×</button>

            {[4, 5, 6].map((n) => (
              <button key={n} onClick={() => handleClick(n)}>
                {n}
              </button>
            ))}
            <button onClick={() => handleClick("-")}>−</button>

            {[1, 2, 3].map((n) => (
              <button key={n} onClick={() => handleClick(n)}>
                {n}
              </button>
            ))}
            <button onClick={() => handleClick("+")}>+</button>

            <button onClick={() => handleClick("0")} className="zero">
              0
            </button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={calculate} className="equal">
              =
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
