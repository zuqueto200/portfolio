import React, { useEffect, useState } from "react";
import "./index.css";
import EstrelaEscura from "../../assets/img/estrelaEscura.png";
import { TextField, TextareaAutosize } from "@mui/material";

export default function Contato() {
  const [contato, setContato] = useState({
    nome: "",
    nomeErro: "",
    email: "",
    emailErro: "",
    mensagem: "",
    mensagemErro: "",
  });
  const [validacao, setValidacao] = useState(false);

  function fnEnvio() {
    console.log("contato", contato);
    
    if (contato.nome == "" || contato.nome == " ")
      setContato((prev) => ({
        ...prev,
        nomeErro: "O campo nome dever ser preenchido.",
      }));
    if (contato.email == "" || contato.email.includes("@") == false)
      setContato((prev) => ({
        ...prev,
        emailErro: "E-mail invalido.",
      }));
    if (contato.mensagem == "" || contato.mensagem == " ")
      setContato((prev) => ({
        ...prev,
        mensagemErro: "O campo mensagem dever ser preenchido.",
      }));
     
  }

  
  useEffect(() => {

// fetch("https://swapi.dev/api/people").then(e => console.log('wwww',e.json()) )

    window.addEventListener('DOMContentLoaded', (event) => { console.log('sssssssssssssssssss',event)})
    setValidacao(false);
    if (
      contato.nome !== "" &&
      contato.nome !== " " &&
      contato.email !== "" &&
      contato.email.includes("@") &&
      contato.mensagem !== "" &&
      contato.mensagem !== " "
    ) {
      setValidacao(true);
    }
  }, [contato]);

  return (
    <>
      <div className="contato">
        <div className="form">
          <form action="https://formspree.io/f/mjvzdadw" method="POST">
            <TextField
              id="outlined-required"
              label="Nome"
              name="Nome"
              color="success"
              value={contato.nome}
              onChange={(e) => {
                setContato((prev) => ({ ...prev, nome: e.target.value }));
                setContato((prev) => ({ ...prev, nomeErro: "" }));
              }}
              style={{ width: "100%", margin: "10px 0 0 0" }}
            />
            <p className="aviso">{contato.nomeErro}</p>

            <TextField
              id="outlined-required"
              label="E-mail"
              name="E-mail"
              color="success"
              value={contato.email}
              onChange={(e) => {
                setContato((prev) => ({ ...prev, email: e.target.value }));
                setContato((prev) => ({ ...prev, emailErro: "" }));
              }}
              style={{ width: "100%", margin: "10px 0 0 0" }}
            />
            <p className="aviso">{contato.emailErro}</p>
            <TextField
              id="outlined-multiline-static"
              label="Mensagem"
              name="Mensagem"
              color="success"
              value={contato.mensagem}
              onChange={(e) => {
                setContato((prev) => ({ ...prev, mensagem: e.target.value }));
                setContato((prev) => ({ ...prev, mensagemErro: "" }));
              }}
              multiline
              rows={4}
              style={{ width: "100%", margin: "10px 0 0 0" }}
            />
            <p className="aviso">{contato.mensagemErro}</p>

            {validacao && (
              <button type="submit" onClick={fnEnvio} className="contatoEnviar" style={{background:'#088d04'}}>
                ENVIAR
              </button>
            )}
          </form>

          {!validacao && (
            <button onClick={fnEnvio} className="contatoEnviar" >
              ENVIAR
            </button>
          )}
        </div>

        <div className="separadorcontato">
          <div className="linhaEscura" style={{ marginRight: "20px" }}></div>

          <img
            src={EstrelaEscura}
            className="divisaoCentrocontato"
            alt="divisão estrela"
          />

          <div className="linhaEscura" style={{ marginLeft: "20px" }}></div>
        </div>
        <div className="contatoTitulo">CONTATO</div>
      </div>
    </>
  );
}
