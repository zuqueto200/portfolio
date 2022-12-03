import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { GrClose } from "react-icons/gr";
import { auth } from "../../../services/firebaseConfig"; 
import Outros from "../Outros";
import { loadReducer } from "../../../store/items"; 
import { useDispatch } from "react-redux";
export default function Cadastro() {
  const [login, setLogin] = useState({
    email: "",
    erroEmail: "",
    senha: "",
    erroSenha: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function fnCadastrar(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(login.email, login.senha);
  }

  const dispatch = useDispatch();

  dispatch(loadReducer(loading ? true : false));
   

  

  return (
    <>
      <div className="backBlack">
        <div className="modal">
          <div className="divFechar">
            <Link to={"/"}>
              <GrClose />
            </Link>
          </div>
          <h1 className="tituloModal">CADASTRO</h1>
          <TextField
            id="outlined-required"
            label="Email"
            name="email"
            color="success"
            value={login.email}
            onChange={(e) => {
              setLogin((prev) => ({ ...prev, email: e.target.value }));
              setLogin((prev) => ({ ...prev, emailErro: "" }));
            }}
            style={{ width: "100%", margin: "10px 0 0 0" }}
          />
          <p className="aviso">{login.emailErro}</p>

          <TextField
            id="outlined-required"
            label="Senha"
            name="senha"
            color="success"
            value={login.senha}
            onChange={(e) => {
              setLogin((prev) => ({ ...prev, senha: e.target.value }));
              setLogin((prev) => ({ ...prev, senhaErro: "" }));
            }}
            style={{ width: "100%", margin: "10px 0 0 0" }}
          />
          <p className="aviso">{login.senhaErro}</p>
     
          <button className="contatoEnviar" onClick={fnCadastrar}>
            ENVIAR
          </button>
          <Outros/>
          <Link to="/login">
            <span style={{ textAlign: "center" }}>Ir para Login</span>
          </Link>
        </div>
      </div>
    </>
  );
}
