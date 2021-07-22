import "./App.css";
import { useState } from "react";
import img from "./Vector.png";

function App() {
  const [switch1, setSwitch1] = useState(0);
  const [switch2, setSwitch2] = useState(0);
  const [switch3, setSwitch3] = useState(0);

  const firstSwitch = () => {
    if (switch1 === 0) {
      return setSwitch1(switch1 + 1);
    } else {
      return setSwitch1(0);
    }
  };
  const secondSwitch = () => {
    if (switch2 === 0) {
      return setSwitch2(switch2 + 1);
    } else {
      return setSwitch2(0);
    }
  };
  const thirdSwitch = () => {
    if (switch3 === 0) {
      return setSwitch3(switch3 + 1);
    } else {
      return setSwitch3(0);
    }
  };

  const isGo = () => {
    if (switch1 && switch2 && switch3) {
      return "Go !";
    } else {
      return "No way!";
    }
  };

  return (
    <div>
      <header>
        <img src={img} alt="vector" />
        <span>Ready To Go</span>
      </header>
      <main>
        <div className="col-1">
          <div>
            <button
              style={{
                backgroundColor: switch1 === 0 ? "white" : "#5c48d3",
                color: switch1 === 0 ? "#5c48d3" : "white",
              }}
              onClick={firstSwitch}
              className="btn"
            >
              ON
            </button>
            <button
              style={{
                backgroundColor: switch2 === 0 ? "white" : "#5c48d3",
                color: switch2 === 0 ? "#5c48d3" : "white",
              }}
              onClick={secondSwitch}
              className="btn"
            >
              ON
            </button>
            <button
              style={{
                backgroundColor: switch3 === 0 ? "white" : "#5c48d3",
                color: switch3 === 0 ? "#5c48d3" : "white",
              }}
              onClick={thirdSwitch}
              className="btn"
            >
              ON
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: switch1 === 1 ? "white" : "#5c48d3",
                color: switch1 === 1 ? "#5c48d3" : "white",
              }}
              onClick={firstSwitch}
              className="btn"
            >
              OFF
            </button>
            <button
              style={{
                backgroundColor: switch2 === 1 ? "white" : "#5c48d3",
                color: switch2 === 1 ? "#5c48d3" : "white",
              }}
              onClick={secondSwitch}
              className="btn"
            >
              OFF
            </button>
            <button
              style={{
                backgroundColor: switch3 === 1 ? "white" : "#5c48d3",
                color: switch3 === 1 ? "#5c48d3" : "white",
              }}
              onClick={thirdSwitch}
              className="btn"
            >
              OFF
            </button>
          </div>
        </div>
        <div className="col-3">
          <button
            onClick={() => {
              setSwitch1(0);
              setSwitch2(0);
              setSwitch3(0);
            }}
            className="btn"
          >
            Reset
          </button>
        </div>
        <div
          className="col-2"
          style={{
            backgroundColor: isGo() === "Go !" && "green",
          }}
        >
          <p>{isGo()}</p>
        </div>
      </main>
      <footer>
        {" "}
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
