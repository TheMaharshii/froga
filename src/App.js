import React from "react";
import { gsap } from "gsap";
import Hero from "./Myhero";
import "./App.css";

import Information from "./Information";
function App() {
  let tl = new gsap.timeline();
  return (
    <div>
      <Hero />
      <Information timeline={tl} />
    </div>
  );
}

export default App;
