import React from "react";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Informacje = () => {
  return (
    <Element name="o-zakladzie" style={{ width: "100%" }}>
      <div className="info-container">
        <div className="heading">Informacje o zakładzie</div>
        <div className="description">
          Nasz warsztat został założony w 2012 roku, znajduje się na terenie
          Nowy Sącz. Od samego początku działania zakładu świadczymy usługi
          najwyższej jakości, dzięki naszej wykfalifikowanej kadrze mechaników.
          Ze względu na szybki rozwój technologii warsztat stale się rozwija,
          wyposażany jest w nowoczesne urządzenia przyspieszające oraz
          podwyższające jakość wykonywanych prac.
        </div>
      </div>
    </Element>
  );
};

export default Informacje;
