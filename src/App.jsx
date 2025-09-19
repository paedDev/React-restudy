import React, { useState } from "react";
import Navbar from "./section/Navbar";
import Counter from "./section/Counter";
import Accordion from "./section/Accordion";
import Accordion1 from "./section/Accordion1";

const App = () => {
  return (
    <>
      <Navbar />
      <Counter />
      <Accordion />
      <Accordion1 />
    </>
  );
};

export default App;
