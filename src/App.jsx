import React, { useState } from "react";
import Navbar from "./section/Navbar";
import Counter from "./section/Counter";
import Accordion from "./section/Accordion";

const App = () => {
  return (
    <>
      <Navbar />
      <Counter />
      <Accordion />
    </>
  );
};

export default App;
