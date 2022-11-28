import React from "react";
import "./index.css";
import Pessoa from "../../assets/img/pessoa.png";
import Estrela from "../../assets/img/estrela.png";
import Chamada from "../Chamada";

export default function Inicio() {
  return (
    <>
      <div className="inicio df aic fdc ">
        <img className="pessoaInicio" src={Pessoa} alt="logo de pessoa" />
        <Chamada />

        <div className="separador">
          <div className="linhaBranca" style={{marginRight:"20px"}}></div>

          <img src={Estrela} className="divisaoCentro" alt="divisão estrela" />

          <div className="linhaBranca"  style={{marginLeft:"20px"}}></div>
        </div>
        <div className="grupoLinguagem">
        <div className="linguagem react">React</div>
        <div className="linguagem html">HTML</div>
        <div className="linguagem css">CSS</div>
        <div className="linguagem javascript">Javascript</div>
        <div className="linguagem angular">Angular Js</div>
        </div>
      </div>
    </>
  );
}
