import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { GrClose } from "react-icons/gr";
import { auth } from "../../../services/firebaseConfig";
import Outros from "../Outros";
import { useDispatch } from "react-redux";
import { loadReducer } from "../../../store/items/Load";
import { avisoReducer } from "../../../store/items/Aviso";
export default function Cadastro() {
  const [cadastro, setCadastro] = useState({
    email: "",
    emailErro: "",
    senha: "",
    senhaErro: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validacao, setValidacao] = useState(false);

  useEffect(() => {
    dispatch(loadReducer(loading ? true : false));
  }, [loading]);

  useEffect(() => {
    if (error?.code == "auth/email-already-in-use") {
      dispatch(
        avisoReducer([
          "vermelho",
          "Este email já está sendo usado por outro usuário.",
        ])
      );
    }
    if (error?.code == "auth/invalid-email") {
      dispatch(avisoReducer(["vermelho", "Este email é invalido."]));
    }
  }, [error]);

  function fnCadastrar() {
    if (validacao) {
      createUserWithEmailAndPassword(cadastro.email, cadastro.senha)
        .then((res) => {
          if (res.operationType == "signIn") {
            navigate("/");
          }

          dispatch(avisoReducer(["verde", "Bem vindo, Cadastro realizado com sucesso!"]));
          dispatch(loadReducer(false));
        })
        .catch((err) => {
          console.error(err);
          // console.log("error", error.code);
        })

        .finally(() => {});
    } else {
      fnEnviar();
    }
  }

  function fnEnviar() {
    if (
      cadastro.email == "" ||
      cadastro.email.includes("@") == false ||
      cadastro.email.includes(".") == false
    )
      setCadastro((prev) => ({
        ...prev,
        emailErro: "E-mail invalido.",
      }));
    if (cadastro.senha.length < 5)
      setCadastro((prev) => ({
        ...prev,
        senhaErro: "A senha deve atender aos requisitos.",
      }));
  }

  useEffect(() => {
    setValidacao(false);
    if (
      cadastro.email !== "" &&
      cadastro.email.includes(".") &&
      cadastro.email.includes("@") &&
      cadastro.senha.length >= 6
    ) {
      setValidacao(true);
    }
  }, [cadastro]);

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
            value={cadastro.email}
            onChange={(e) => {
              setCadastro((prev) => ({ ...prev, email: e.target.value }));
              setCadastro((prev) => ({ ...prev, emailErro: "" }));
            }}
            style={{ width: "100%", margin: "10px 0 0 0" }}
          />
          <p className="aviso">{cadastro.emailErro}</p>

          <TextField
            id="outlined-required"
            label="Senha"
            name="senha"
            color="success"
            value={cadastro.senha}
            onChange={(e) => {
              setCadastro((prev) => ({ ...prev, senha: e.target.value }));
              setCadastro((prev) => ({ ...prev, senhaErro: "" }));
            }}
            style={{ width: "100%", margin: "10px 0 0 0" }}
          />
          <p className="aviso">{cadastro.senhaErro}</p>

          <button className="contatoEnviar" onClick={fnCadastrar}>
            Enviar
          </button>

          <Outros />

          <Link to="/login">
            <span style={{ textAlign: "center" }}>Ir para Login</span>
          </Link>
        </div>
      </div>
    </>
  );
}
