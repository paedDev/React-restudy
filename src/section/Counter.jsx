import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="max-w-7xl mx-auto h-[30vh]  p-6   ">
      <div className=" text-black flex flex-col items-center justify-center space-y-20 p-10 rounded-xl shadow-xl">
        <div className="flex space-x-10">
          <button onClick={handleIncrement}>Incremenent</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <div
          className={`${
            count === 0
              ? "text-black"
              : count > 0
              ? "text-green-800"
              : "text-red-800"
          } text-5xl`}
        >
          {count}
        </div>
      </div>
    </div>
  );
};

export default Counter;
