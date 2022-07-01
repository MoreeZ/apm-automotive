import React, {
    useEffect
} from "react";
import NavBar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Covid from "./components/Covid";
import Uslugi from "./components/Uslugi";
import Cennik from "./components/Cennik";
import Kontakt from "./components/Kontakt";
import Informacje from "./components/Informacje";
import Footer from "./components/Footer";

import * as ScrollMagic from "scrollmagic";
import {
    TweenMax,
    TimelineMax
} from "gsap";
import {
    ScrollMagicPluginGsap
} from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
        // const covidHeading = document.querySelector(".covid-container .heading");
        // const covidDescription = document.querySelector(".covid-container .description");
        // const uslugiCont = document.querySelector(".uslugi-container");
        // const uslugi = document.querySelector(".uslugi-container .cards-container").childNodes;

        // TweenMax.to(covidHeading, 0.5, {
        //     opacity: 1,
        //     x: "0px"
        // }).delay(1);
        // TweenMax.to(covidDescription, 0.5, {
        //     opacity: 1,
        //     x: "0px"
        // }).delay(1.1);

        const controller = new ScrollMagic.Controller();

        // let tl1 = new TimelineMax();
        // let tl2 = new TimelineMax();

        // uslugi.forEach((usluga, i) => {
        //     if (i % 2 === 0) {
        //         tl1.to(usluga, 0.3, {
        //             opacity: 1,
        //             y: "0px"
        //         });
        //     } else {
        //         tl2.to(usluga, 0.3, {
        //             opacity: 1,
        //             y: "0px"
        //         }).delay(0.15);
        //     }
        // });

        // new ScrollMagic.Scene({
        //     triggerElement: uslugiCont,
        //     offset: window.innerWidth >= 1050 ? -50 : -600
        // })
        //     .setTween(tl1)
        //     .addTo(controller);
        // new ScrollMagic.Scene({
        //     triggerElement: uslugiCont,
        //     offset: window.innerWidth >= 1050 ? -50 : -600
        // })
        //     .setTween(tl2)
        //     .addTo(controller);

        const infoHeading = document.querySelector(".info-container .heading");
        const infoDesc = document.querySelector(".info-container .description");
        const infoCont = document.querySelector(".info-container");

        const tween1 = TweenMax.to(infoHeading, 0.3, {
            opacity: 1,
            scale: 1
        });
        const tween2 = TweenMax.to(infoDesc, 0.3, {
            opacity: 1,
            scale: 1
        }).delay(0.15);

        new ScrollMagic.Scene({
            triggerElement: infoCont,
            offset: -100
        })
            .setTween(tween1)
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: infoCont,
            offset: -100
        })
            .setTween(tween2)
            .addTo(controller);
    });
    return (
        <div className="App" >
            <NavBar />
            <MainPage />
            {/* <Covid /> */}
            {/* <Uslugi /> */}
            <Cennik />
            <Informacje />
            <Kontakt />
            <Footer />
        </div>
    );
}

export default App;