import React from "react";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Covid = () => {
  return (
    <Element name="covid">
      <div className="covid-container">
        <div className="heading">COVID-19</div>
        <div className="description">
          W związku z zagrożeniem epidemiologicznym wszelkich informacji o pracy
          APM AUTOMOTIVE udzielamy telefonicznie. Zapisy na wykonanie usługi
          naprawy samochodu również tylko telefonicznie. Samochód do naprawy
          należy dostarczyć w dniu roboczym poprzedzającym termin wykonania
          usługi w godzinach pracy warsztatu. Każdy samochód przed rozpoczęciem
          prac jest dezynfekowany metodą ozonową oraz zabezpieczany folią
          (kierownica, lewarek, ręczny). Po wykonaniu usługi dezynfekcja ozonowa
          jest wykonywana powtórnie. W okresie zagrożenia nie wykonujemy usług
          tzw. „na poczekaniu”. Prosimy o wyrozumiałość i przestrzeganie zasad
          określonych przez służby sanitarno-epidemiologiczne.
        </div>
      </div>
    </Element>
  );
};

export default Covid;
