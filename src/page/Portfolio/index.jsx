import React from "react";
import "./index.css";
import EstrelaEscura from "../../assets/img/estrelaEscura.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">

        <div className="gradePortfolio">

          <div className="itemsportfolio">1</div>      
          <div className="itemsportfolio">2</div>      
          <div className="itemsportfolio">3</div>      
          <div className="itemsportfolio">4</div>      
          <div className="itemsportfolio">5</div>      
          <div className="itemsportfolio">6</div>      
        </div>


        <div className="separadorPortfolio">
          <div className="linhaEscura" style={{ marginRight: "20px" }}></div>

          <img
            src={EstrelaEscura}
            className="divisaoCentroPortfolio"
            alt="divisão estrela"
          />

          <div className="linhaEscura" style={{ marginLeft: "20px" }}></div>
        </div>
        <div className="portfolioTitulo">PORTFÓLIO</div>
      </div>
    </>
  );
}
