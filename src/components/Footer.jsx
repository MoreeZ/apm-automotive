import React from "react";
import fbWhite from "../assets/facebook-white.svg";

import * as Scroll from "react-scroll";
var scroller = Scroll.scroller;
const scrollToElement = name => {
  scroller.scrollTo(name, {
    duration: 500,
    delay: 0,
    smooth: true,
    offset: 0
  });
};

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="links">
        {/* <li onClick={() => scrollToElement("covid")}>COVID-19</li> */}
        {/* <li onClick={() => scrollToElement("uslugi")}>USŁUGI</li> */}
        <li onClick={() => scrollToElement("cennik")}>CENNIK</li>
        <li onClick={() => scrollToElement("o-zakladzie")}>O ZAKŁADZIE</li>
        <li onClick={() => scrollToElement("kontakt")}>KONTAKT</li>
        <li>
          <a
            className="social-cont"
            href="https://www.facebook.com/apmautoserwis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={fbWhite}></img>
          </a>
        </li>
      </ul>

      <div className="copyright">
        Chronimy twoją prywatność.
        <br />
        Copyright ©2022 APM AUTOMOTIVE biuro@apmautoserwis.pl
      </div>
    </div>
  );
};

export default Footer;
