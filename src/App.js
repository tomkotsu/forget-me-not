import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Wip from "./components/Wip";
import HowTo from "./components/HowTo";
import Contact from "./components/Contact";

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
