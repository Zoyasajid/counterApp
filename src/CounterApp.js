import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counterapp">
      <div>
        <h2 className="countTotal">{counter}</h2>
        <div className="counterFlex">
          {" "}
          <button
            onClick={() => setCounter(counter + 1)}
            className="counterIcon"
          >
            <TiPlus />
          </button>
          <button onClick={() => setCounter(0)} className="counterIcon">
            <IoReloadOutline />
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            className="counterIcon"
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </div>
  );
}
