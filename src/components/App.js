import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Wip from "./Wip";
import HowTo from "./HowTo";
import Contact from "./Contact";

function App() {
  return (
    <div className="App flex flex-col">
      <Wip />
      <Navbar />
      <Hero />
      <HowTo />
      <Contact />
    </div>
  );
}

export default App;
