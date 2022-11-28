import React, { useState } from "react";
import "./index.css";
import Facebook from "../../assets/img/Facebook.png";
import git from "../../assets/img/git.png";
import Instagram from "../../assets/img/Instagram.png";
import WhatsApp from "../../assets/img/WhatsApp.png";
import LinkedIn from "../../assets/img/LinkedIn.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="itensFooter">
          <div className="itemF">
            <span className="tituloFooter">Localização</span>
            <span className="textoFooter">
              Rua Antônio Austregesilo 149
              <br></br>
              Santo André - São Paulo
              <br></br>
              CEP 09121-710
            </span>
          </div>
          <div className="itemF">
            <span className="tituloFooter">WEB</span>
            <div className="todasRedes">
              <a className="divImg" target="_blank" href="https://www.linkedin.com/in/ricardo-zuqueto-73a899231/">
                <img className="imgRede" src={LinkedIn} alt="logo LinkedIn" />
              </a>

              <a className="divImg" target="_blank" href="https://github.com/zuqueto200">
                <img className="imgRede" src={git} alt="logo git" />
              </a>
              <a className="divImg" target="_blank" href="https://api.whatsapp.com/send/?phone=5511953487044&text=%20Ricardo%20Desenvolvedor%20Front-end">
                <img className="imgRede" src={WhatsApp} alt="logo WhatsApp" />
              </a>
              <a className="divImg" target="_blank" href="https://www.instagram.com/ricardo_zuqueto/">
                <img className="imgRede" src={Instagram} alt="logo Instagram" />
              </a>
              <a className="divImg" target="_blank" href="https://www.facebook.com/ricardo.zuqueto">
                <img className="imgRede" src={Facebook} alt="logo facebook" />
              </a>
            </div>
          </div>
          <div className="itemF">
            <span className="tituloFooter">Meu objetivo</span>
            <span className="textoFooter">
              É o desenvolvimento profissional e pessoal, sou uma pessoa em
              constante busca por aperfeiçoamento, valorizo muito os
              relacionamentos interpessoais e o trabalho em equipe
            </span>
          </div>
        </div>

        <div className="textoLegal">Copyright © Ricardo Zuqueto 2022</div>
      </div>
    </>
  );
}
