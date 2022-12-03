import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";
import "../index.css";
import { GrClose } from "react-icons/gr";

export default function EsqueciSenha() {
  const [login, setLogin] = useState({
    email: "",
    erroEmail: "",
    senha: "",
    erroSenha: "",
  });

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  return (
    <>
      <div className="backBlack">
        <div className="modal">
          <div className="divFechar">
            <Link to={"/"}>
              <GrClose />
            </Link>
          </div>

          <h1 className="tituloModal">ESQUECI MINHA SENHA</h1>
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

          <p className="aviso">{login.senhaErro}</p>

          <button
            className="contatoEnviar"
            onClick={() => sendPasswordResetEmail(login.email)}>
            Solicitar nova senha
          </button>
        </div>
      </div>
    </>
  );
}
