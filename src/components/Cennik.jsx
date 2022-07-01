import React from "react";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Cennik = () => {
  return (
    <Element name="cennik">
      <div className="cennik-container">
        <div className="heading">Cennik</div>
        <table>
          <thead>
            <tr>
              <th>Usługi Elektromechaniczne:</th>
              <th>Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diagnostyka komputerowa</td>
              <td>100,00zł</td>
            </tr>
            <tr>
              <td>Naprawy elektromechaniczne /godz</td>
              <td>110,00zł</td>
            </tr>
            <tr>
              <th>Serwis Klimatyzacji:</th>
              <th></th>
            </tr>
            <tr>
              <td>Przegląd klimatyzacji – komplet (bez napraw)</td>
              <td>230,00zł</td>
            </tr>
            <tr>
              <td>Przegląd klimatyzacji – bez odkażania</td>
              <td>160,00zł</td>
            </tr>
            <tr>
              <td>Płukanie układu klimatyzacji</td>
              <td>450,00zł</td>
            </tr>
            <tr>
              <td>Naprawy układu klimatyzacji /godz</td>
              <td>110,00zł</td>
            </tr>
            <tr>
              <td>Diagnostyka i wycena naprawy układu klimatyzacji</td>
              <td>200,00zł</td>
            </tr>
            <tr>
              <th>Naprawy MechanicznE Samochodów:</th>
              <th></th>
            </tr>
            <tr>
              <td>Naprawy mechaniczne /godz</td>
              <td>110,00zł</td>
            </tr>
            <tr>
              <td>Wymiana oleju silnikowego z filtrami***</td>
              <td>50,00 – 150,00zł</td>
            </tr>
            <tr>
              <td>Wymiana oleju z filtrem oleju *** </td>
              <td>30,00 – 80,00zł</td>
            </tr>
            <tr>
              <th>Wymiana Rozrządu:</th>
              <th></th>
            </tr>
            <tr>
              <td>Silniki benzynowe, diesla </td>
              <td>350,00 – 550,00zł</td>
            </tr>
          </tbody>
        </table>
        <div className="caly-cennik">
          Pobierz szczegóły oraz więcej cen{" "}
          <a href="https://cdn.fbsbx.com/v/t59.2708-21/91152344_3653890844644299_5108866665198649344_n.docx/CENNIK_2020.docx?_nc_cat=107&_nc_sid=0cab14&_nc_ohc=CyHHvFQZklAAX8pmJnA&_nc_ht=cdn.fbsbx.com&oh=41b7db1ce142bd822e39188c2d867903&oe=5E7CF382&dl=1&fbclid=IwAR3rHHXuZApiejK-mTfZfWAAvirPjUaA6m0BWQ6oD5Jbtr0x222hhJRrdC4">
            tutaj
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Cennik;
