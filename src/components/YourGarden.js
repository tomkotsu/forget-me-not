import React from "react";
import Navbar from "./Navbar";
import Wip from "./Wip";

const YourGarden = () => {
  return (
    <div>
      <Wip />
      <Navbar />
      <section className="flex justify-center items-center flex-col p-12">
        <div className="text-8xl text-blue-800 bg-yellow-500">YOUR GARDEN</div>
      </section>
    </div>
  );
};

export default YourGarden;
