import {TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../../services/firebaseConfig";
import "../index.css";
import {GrClose} from "react-icons/gr";
import Outros from "../Outros";
import {loadReducer} from "../../../store/items/Load";
import {useDispatch} from "react-redux";
import {avisoReducer} from "../../../store/items/Aviso";
import ForcaSenha from "../../ForcaSenha";

export default function Login() {
  const [validaSenha, setValidaSenha] = useState([false, false, false, false]);
  const [contadorEtapaSenha, setContadorEtapaSenha] = useState(0);
  const [login, setLogin] = useState({
    email: "",
    erroEmail: "",
    senha: "",
    erroSenha: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadReducer(loading ? true : false));
  }, [loading]);

  useEffect(() => {
    if (error?.code == "auth/user-disabled") {
      dispatch(avisoReducer(["vermelho", "Você foi bloqueado!"]));
    }
    if (error?.code == "auth/user-not-found") {
      dispatch(avisoReducer(["laranja", "E-mail não cadastrado!"]));
    }
    if (error?.code == "auth/wrong-password") {
      dispatch(avisoReducer(["vermelho", "Senha Inválida"]));
    }
    if (error?.code == "auth/invalid-email") {
      dispatch(avisoReducer(["vermelho", "Este email é invalido."]));
    }
  }, [error]);

  function fnEmaileSenha() {
    signInWithEmailAndPassword(login.email, login.senha)
      .then((res) => {
        console.log("res", res);
        if (res.operationType == "signIn") {
          navigate("/");
        }

        dispatch(avisoReducer(["verde", "Login realizado com sucesso!"]));
        dispatch(loadReducer(false));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {});
  }
  function fnSenha(e) {
    var senha = e.target.value;

    if (senha.length >= 8) {
      validaSenha[0] = true;
    } else {
      validaSenha[0] = false;
    }

    if (senha.replace(/[^0-9]/g, "").length > 0) {
      validaSenha[1] = true;
    } else {
      validaSenha[1] = false;
    }

    if (senha.replace(/[^a-z]/g, "").length > 0 && senha.replace(/[^A-Z]/g, "").length > 0) {
      validaSenha[2] = true;
    } else {
      validaSenha[2] = false;
    }

    if (senha.replace(/[a-zA-Z0-9]/g, "").length > 0) {
      validaSenha[3] = true;
    } else {
      validaSenha[3] = false;
    }

    var num = 0;
    for (var x = 0; x <= validaSenha.length; x++) {
      if (validaSenha[x] == true) num++;
    }
    setContadorEtapaSenha(num);

    setLogin((prev) => ({...prev, senha: e.target.value}));
    setLogin((prev) => ({...prev, senhaErro: ""}));
  }
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
              setLogin((prev) => ({...prev, email: e.target.value}));
              setLogin((prev) => ({...prev, emailErro: ""}));
            }}
            style={{width: "100%", margin: "10px 0 0 0"}}
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
              fnSenha(e);
            }}
            style={{width: "100%", margin: "10px 0 0 0"}}
          />
          <ForcaSenha etapa={contadorEtapaSenha} />
          <p className="aviso">{login.erroSenha}</p>

          <span style={{textAlign: "right"}}>
            <Link to="/esqueci-minha-senha">Esqueci a senha</Link>
          </span>

          <button
            className="contatoEnviar"
            onClick={() => {
              fnEmaileSenha();
            }}>
            Fazer login
          </button>

         

          <Outros />
          <Link to="/cadastro">
            <span style={{textAlign: "center"}}>Cadastre-se aqui</span>
          </Link>
        </div>
      </div>
    </>
  );
}
