import React, { useEffect } from "react";
// import arrowDown from "../assets/arrow-down.svg";
import { TweenMax } from "gsap";

import * as Scroll from "react-scroll";
var scroller = Scroll.scroller;
var Element = Scroll.Element;

const scrollToElement = name => {
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 0,
    smooth: true,
    offset: 0
  });
};

const MainPage = () => {
  useEffect(() => {
    const heading = document.querySelector(".landing-container .heading");
    const subheading = document.querySelector(".landing-container .subheading");
    const button = document.querySelector(".landing-container .button");
    TweenMax.to(heading, 0.6, { opacity: 1, x: "0px" }).delay(0.6);
    TweenMax.to(subheading, 0.6, { opacity: 1, x: "0px" }).delay(0.7);
    TweenMax.to(button, 0.6, { opacity: 1, x: "0px" }).delay(0.8);
  }, []);

  return (
    <Element name="mainpage" style={{ width: "100%" }}>
      <div className="landing-container">
        <div className="wrapper">
          <div className="text-container">
            <div className="heading">APM AUTOMOTIVE</div>
            <div className="subheading">
              APM AUTOMOTIVE to profesjonalny warsztat samochodowy. Usługi
              wykonywane są przez wykfalifikowaną kadrę co zapewnia wysoką
              jakość. Zajmujemy się szeroko pojętą mechaniką samochodową i
              obsługą klimatyzacji. Nasz warsztat wyposażony jest w
              profesjonalne narzędzia oraz oprogramowania diagnostyczne.
            </div>
            <div className="button" onClick={() => scrollToElement("kontakt")}>
              SKONTAKTUJ SIĘ Z NAMI
            </div>
          </div>
          {/* <div className="arrow-down">
            <img src={arrowDown}></img>
          </div> */}
        </div>
      </div>
    </Element>
  );
};

export default MainPage;
