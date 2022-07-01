import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.svg";

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

const openMenu = () => {
  const backgroundCircle = document.querySelector(
    ".menu-navbar .background-circle"
  );
  const menuIcon = document.querySelector(".menu-navbar svg");
  const links = document.querySelector(".menu-links");
  const darkenBg = document.querySelector(".darken-bg");
  backgroundCircle.style.height = "330px";
  backgroundCircle.style.width = "210px";
  menuIcon.style.opacity = 0;
  menuIcon.style.pointerEvents = "none";
  backgroundCircle.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.15)";
  links.style.opacity = 1;
  links.style.pointerEvents = "all";
  links.style.transition = "opacity 200ms ease-in-out 200ms";
  darkenBg.style.opacity = 1;
  darkenBg.style.pointerEvents = "all";
};

const closeMenu = () => {
  const backgroundCircle = document.querySelector(
    ".menu-navbar .background-circle"
  );
  const menuIcon = document.querySelector(".menu-navbar svg");
  const darkenBg = document.querySelector(".darken-bg");
  backgroundCircle.style.height = "100px";
  backgroundCircle.style.width = "100px";
  menuIcon.style.opacity = 1;
  menuIcon.style.pointerEvents = "all";
  backgroundCircle.style.boxShadow = "none";
  const links = document.querySelector(".menu-links");
  links.style.transition = "opacity 100ms ease-in-out 0s";
  links.style.opacity = 0;
  links.style.pointerEvents = "none";
  darkenBg.style.opacity = 0;
  darkenBg.style.pointerEvents = "none";
};

function Navbar() {
  useEffect(() => {
    const scrollAction = () => {
      const navbarContwrapper = document.querySelector(
        ".navbar-container .wrapper"
      );
      const bgStrip = document.querySelector(
        ".navbar-container .white-background-strip"
      );
      const menuBars = document.querySelector(".menu-navbar");
      const menuIcon = document.querySelector(".menu-navbar svg");
      if (window.innerWidth > 1050) {
        if (window.scrollY === 0) {
          // If on top
          closeMenu();
          navbarContwrapper.style.opacity = 1;
          menuBars.style.opacity = 0;
          menuIcon.style.pointerEvents = "none";
          bgStrip.style.transform = "translateX(0%)";
          navbarContwrapper.style.pointerEvents = "all";
        } else {
          // If not on top
          navbarContwrapper.style.opacity = 0;
          menuBars.style.opacity = 1;
          menuIcon.style.pointerEvents = "all";
          bgStrip.style.transform = "translateX(-100%)";
          navbarContwrapper.style.pointerEvents = "none";
        }
      } else {
        navbarContwrapper.style.opacity = 0;
        menuBars.style.opacity = 1;
        menuIcon.style.pointerEvents = "all";
        bgStrip.style.transform = "translateX(-100%)";
        navbarContwrapper.style.pointerEvents = "none";
      }
    };

    const mouseoverAction = () => {
      closeMenu();
    };

    window.addEventListener("scroll", scrollAction);
    document
      .querySelector(".darken-bg")
      .addEventListener("mouseover", mouseoverAction);
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="white-background-strip"></div>
      <div className="full-navbar">
        <div className="wrapper">
          <div
            className="logo-cont"
            onClick={() => scrollToElement("mainpage")}
          >
            <img alt="" src={logo}></img>
          </div>
          <div className="links-cont">
            <ul>
              {/* <li onClick={() => scrollToElement("covid")}>COVID-19</li> */}
              {/* <li onClick={() => scrollToElement("uslugi")}>USŁUGI</li> */}
              <li onClick={() => scrollToElement("cennik")}>CENNIK</li>
              <li onClick={() => scrollToElement("o-zakladzie")}>
                O ZAKŁADZIE
              </li>
              <li onClick={() => scrollToElement("kontakt")}>KONTAKT</li>
            </ul>
          </div>
          <a
            className="social-cont"
            href="https://www.facebook.com/apmautoserwis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src={facebook}></img>
          </a>
        </div>
      </div>
      <div className="menu-navbar">
        <div className="background-circle"></div>
        <div className="darken-bg"></div>
        <ul className="menu-links">
          <img alt="" onClick={() => scrollToElement("mainpage")} src={logo}></img>
          {/* <li onClick={() => scrollToElement("covid")}>COVID-19</li> */}
          {/* <li onClick={() => scrollToElement("uslugi")}>USŁUGI</li> */}
          <li onClick={() => scrollToElement("cennik")}>CENNIK</li>
          <li onClick={() => scrollToElement("o-zakladzie")}>O ZAKŁADZIE</li>
          <li onClick={() => scrollToElement("kontakt")}>KONTAKT</li>
        </ul>
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openMenu}
        >
          <path
            d="M15.0589 23.5294H48.9412C50.4998 23.5294 51.7648 22.2644 51.7648 20.7059C51.7648 19.1473 50.4998 17.8823 48.9412 17.8823H15.0589C13.5003 17.8823 12.2354 19.1473 12.2354 20.7059C12.2354 22.2644 13.5003 23.5294 15.0589 23.5294ZM48.9412 29.1764H15.0589C13.5003 29.1764 12.2354 30.4414 12.2354 32C12.2354 33.5586 13.5003 34.8235 15.0589 34.8235H48.9412C50.4998 34.8235 51.7648 33.5586 51.7648 32C51.7648 30.4414 50.4998 29.1764 48.9412 29.1764ZM48.9412 40.4706H15.0589C13.5003 40.4706 12.2354 41.7355 12.2354 43.2941C12.2354 44.8527 13.5003 46.1176 15.0589 46.1176H48.9412C50.4998 46.1176 51.7648 44.8527 51.7648 43.2941C51.7648 41.7355 50.4998 40.4706 48.9412 40.4706Z"
            fill="#151515"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
