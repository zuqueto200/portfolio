import React from "react";
import "./index.css";
import Estrela from "../../assets/img/estrela.png";

export default function Sobre() {
  return (
    <>
      <div className="sobre">
        <div className="textos">
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            porro repellendus atque vel est at debitis, asperiores, excepturi
            earum, odio placeat eius deleniti libero. Quidem tempore repudiandae
            a dignissimos et! Itaque voluptates laboriosam ratione ut vero
            aspernatur aperiam, repellendus et quisquam qui? Id mollitia nam
            libero nihil animi non delectus unde quas expedita, ipsam aliquid
            commodi ab quidem temporibus qui. Iusto impedit ipsum cum.  
          </article>
          <article>
            Lorem ipsum dolor sit amet consectetur adip am ratione ut vero
            aspernatur aperiam, repellendus et quisquam qui? Id mollitia nam
            libero nihil animi non delectus unde quas expedita, ipsam aliquid
            commodi ab quidem temporibus qui. Iusto impedit ipsum cum.  
          </article>

          
        </div>

        <div className="separador">
          <div className="linhaBranca" style={{ marginRight: "20px" }}></div>

          <img src={Estrela} className="divisaoCentro" alt="divisão estrela" />

          <div className="linhaBranca" style={{ marginLeft: "20px" }}></div>
        </div>

        <div className="sobreTitulo">SOBRE</div>
      </div>
    </>
  );
}
