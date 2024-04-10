import React from 'react'
import { gsap, Power3 } from "gsap";
import Header from "./Header";
import Content from "./Content";
import Images from "./Images";
function hero() {
    let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div className='myhero'>
        <Header timeline={tl} ease={ease} />
      <Content timeline={tl} />
      <Images timeline={tl} ease={ease} />
    </div>
  )
}

export default hero