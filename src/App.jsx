import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="max-w-7xl mx-auto min-h-screen p-6 flex flex-col items-center justify-center bg-gray-200 space-y-20">
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
  );
};

export default App;
