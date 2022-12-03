import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";
import "../index.css";
import { GrClose } from "react-icons/gr";
import Outros from "../Outros";
import { loadReducer } from "../../../store/items";
import { useDispatch } from "react-redux";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    erroEmail: "",
    senha: "",
    erroSenha: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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
          <h1 className="tituloModal">LOGIN</h1>
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
          <p className="aviso">{login.erroEmail}</p>

          <TextField
            id="outlined-required"
            type="password"
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
          <p className="aviso">{login.erroSenha}</p>
          <Link to="/esqueci-minha-senha">
            <span style={{ textAlign: "right" }}>Esqueci a senha</span>
          </Link>

          <button
            className="contatoEnviar"
            onClick={() =>
              signInWithEmailAndPassword(login.email, login.senha)
            }>
            Fazer login
          </button>

          <Outros />
          <Link to="/cadastro">
            <span style={{ textAlign: "center" }}>Cadastre-se aqui</span>
          </Link>
        </div>
      </div>
    </>
  );
}
