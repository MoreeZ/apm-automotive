import React from "react";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Kontakt = () => {
  return (
    <Element name="kontakt">
      <div className="kontakt-container">
        <div className="kontakt-sub">
          <div className="heading">kontakt</div>
          <table>
            <tr>
              <td>Tel: </td>
              <td>665 898 811</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>biuro@apmautoserwis.pl</td>
            </tr>
          </table>
        </div>
        <div className="otwarcie-sub">
          <div className="heading">Godziny Otwarcia</div>
          <table>
            <tr>
              <td>Pon - Pt: </td>
              <td>8:00am - 18:00pm</td>
            </tr>
            <tr>
              <td>Sob: </td>
              <td>8:00am - 14:00pm</td>
            </tr>
          </table>
        </div>
        <div className="lokalizacja-sub">
          <div className="heading">Lokalizacja</div>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.0648691843508!2d20.710535316031756!3d49.6342319793709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053647608f39d%3A0x7af9e2ef126d097b!2sAPM+Auto+Serwis+Mechanika+Elektromechanika+Klimatyzacja+Wulkanizacja+Diagnostyka+Komputerowa!5e0!3m2!1spl!2spl!4v1566291663742!5m2!1spl!2spl"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              title="google-maps-api"
            ></iframe>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Kontakt;
