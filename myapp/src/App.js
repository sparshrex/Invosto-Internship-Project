import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import icon1 from "./images/icon-check.svg";
import icon2 from "./images/icon-slider.svg";
import icon3 from "./images/pattern-circles.svg";
import Switch from "react-switch";

function App() {
  const [val, setVal] = useState(50);
  const [check, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  const handleVal = (num) => {
    setVal(num);
  };
  return (
    <div className="App bg-[#F9FAFF] h-screen">
      <div className="box">
        <div className="head">
          <h1>Simple, traffic based pricing</h1>
          <h1>Sign-up for our 30-day trial. No credit card required.</h1>
        </div>
        <div className="bg-white mx-52">
          <div>
            <h1>100k PAGEVIEWS</h1>
            <h1>
              ${val}.00 <span>/month</span>
            </h1>
          </div>
          <input
            onChange={(e) => handleVal(e.target.value)}
            type="range"
            min="0"
            max="100"
            steps="20"
          ></input>
          <div>
            <h1>Monthly Billing</h1>
            <Switch
              onChange={(e) => handleChange(e)}
              checked={check}
              checkedIcon=""
              uncheckedIcon=""
            />

            <h1>Yearly Billing</h1>
            <h1>25% Discount</h1>
          </div>
          <div className="flex">
            <div>
              <div className="flex justify-center">
                <img src={icon1} />
                <h1>Unlimited Websites</h1>
              </div>
              <div className="flex justify-center">
                <img src={icon1} />
                <h1>Unlimited Websites</h1>
              </div>
              <div className="flex justify-center">
                <img src={icon1} />
                <h1>Unlimited Websites</h1>
              </div>
            </div>
            <div>
              <button>Start My Trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
