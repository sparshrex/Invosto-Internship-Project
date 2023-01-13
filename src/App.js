import "./App.css";
import { useState } from "react";
import icon1 from "./images/icon-check.svg";

import Switch from "react-switch";

function App() {
  const [val, setVal] = useState(50);
  const [check, setCheck] = useState(false);
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    setCheck(!check);
  };

  function handleDark() {
    setDark(!dark);
  };

  const handleVal = (num) => {
    setVal(num);
  };
  return (
    <div
      className={
        dark ? "App bg-[#171717] h-screen" : "App bg-[#ffffffc6] h-screen"
      }
    >
      <div className= { dark? "bg-[#171717] h-screen text-white" :"h-[50vh] bg-gray-200"}>
        <div className="flex absolute m-16 tablet:m-8 sm:m-8">
          <h1 className="font-bold text-[1.2rem] mr-4">Mode</h1>
          <Switch
            className="ml-2 mr-6"
            onChange={ handleDark}
            checked={dark}
            checkedIcon=""
            uncheckedIcon=""
          />
        </div>
        <div className="head p-24 tablet:p-32 sm:px-24 sm:py-32">
          <h1 className="text-[#446cdd] tablet:text-[2rem] sm:text-[1rem] font-bold">
            Simple, traffic based pricing
          </h1>
          <h1 className="text-[#3c55d2] tablet:text-[1rem] sm:text-[0.7rem]">
            Sign-up for our 30-day trial. No credit card required.
          </h1>
        </div>
        <div
          className={
            dark
              ? "bg-[#262626] desktop:mx-80 l1:mx-48 tablet:mx-8 sm:mx-4 shadow-[0px_3px_10px_#e6e3e3] rounded-lg p-4"
              : "bg-white desktop:mx-80 l1:mx-48 tablet:mx-8  sm:mx-4 shadow-[0px_5px_10px_#bf6256] rounded-lg p-4"
          }
        >
          <div className="flex tablet:justify-around sm:justify-center pt-8">
            <h1 className={dark ? "text-white" : "text-[#b3b5bf]"}>
              100k PAGEVIEWS
            </h1>
            <h1
              className={
                dark
                  ? "text-[#81e0ff] text-[2rem] font-bold sm:hidden tablet:block"
                  : "text-[#39425b] text-[2rem] font-bold sm:hidden tablet:block"
              }
            >
              ${val}.00{" "}
              <span
                className={
                  dark
                    ? "text-white text-[1rem] font-normal"
                    : "text-[#b3b5bf] text-[1rem] font-normal"
                }
              >
                /month
              </span>
            </h1>
          </div>
          <input
            className="input my-8 w-80"
            onChange={(e) => handleVal(e.target.value)}
            type="range"
            min="0"
            max="100"
            steps="20"
          ></input>
          <h1
            className={
              dark
                ? "text-[#81e0ff] text-[2rem] font-bold tablet:hidden sm:block sm:my-4"
                : "text-[#39425b] text-[2rem] font-bold tablet:hidden sm-block sm:my-4"
            }
          >
            ${val}.00{" "}
            <span
              className={
                dark
                  ? "text-white text-[1rem] font-normal"
                  : "text-[#b3b5bf] text-[1rem] font-normal"
              }
            >
              /month
            </span>
          </h1>
          <div className="flex justify-center mt-4">
            <h1 className={dark ? "text-white" : "text-[#b3b5bf]"}>
              Monthly Billing
            </h1>
            <div>
              <Switch
                className="ml-2 mr-6"
                onChange={(e) => handleChange(e)}
                checked={check}
                checkedIcon=""
                uncheckedIcon=""
              />
            </div>

            <h1 className={dark ? "ml-4 text-white" : "ml-4 text-[#b3b5bf]"}>
              Yearly Billing
            </h1>
            <h1 className={dark ? "ml-2 text-[#81e0ff]" : "ml-2 text-red-500"}>
              25% Discount
            </h1>
          </div>
          <div className="flex sm:flex-col tablet:flex-row justify-around my-8">
            <div>
              <div className="flex justify-center items-center sm:my-2">
                <div className="mr-4">
                  <img alt="img" src={icon1} />
                </div>
                <h1 className={dark ? "text-white font-bold" : "font-bold"}>
                  Unlimited Websites
                </h1>
              </div>
              <div className="flex justify-center items-center sm:my-2">
                <div className="mr-4">
                  <img alt="img" src={icon1} />
                </div>
                <h1 className={dark ? "text-white font-bold" : "font-bold"}>
                  Unlimited Websites
                </h1>
              </div>
              <div className="flex justify-center items-center sm:my-2">
                <div className="mr-4">
                  <img alt="img" src={icon1} />
                </div>
                <h1 className={dark ? "text-white font-bold" : "font-bold"}>
                  Unlimited Websites
                </h1>
              </div>
            </div>
            <div>
              <button
                className={
                  dark
                    ? "bg-[#5d5858] rounded-full text-white px-4 py-2 sm:mt-8 "
                    : "bg-[#293355] rounded-full text-white px-4 py-2 sm:mt-8 "
                }
              >
                Start My Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
