import React, { useEffect, useState } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import FB from "../../../assets/img/fb.png";
import GG from "../../../assets/img/gg.png";
import { auth } from "../../../services/firebaseConfig";
import "./index.css";
import { loadReducer } from "../../../store/items/Load";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { avisoReducer } from "../../../store/items/Aviso";

export default function Outros() {
  const navigate = useNavigate();

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReducer(loadingGoogle || loadingFacebook ? true : false));
  }, [loadingGoogle, loadingFacebook]);
 
  
 
  useEffect(()=>{

    if (errorGoogle?.code == "auth/popup-closed-by-user" ){ dispatch(avisoReducer(["vermelho", "Você não completou o login do Google!"]))}  
    if (errorFacebook?.code == "auth/popup-closed-by-user" ){ dispatch(avisoReducer(["vermelho", "Você não completou o login do Facebook!"]))}  

  },[errorGoogle, errorFacebook])


 


  function fnFacebook() {
    signInWithFacebook()
    .then((res) => {
      if (res.operationType == "signIn") navigate("/");
      dispatch(avisoReducer(["verde", "Você esta Logado com o Facebook!"]));
    })
    .catch((err) => {
      console.error(err);
      })
      .finally(() => {
        dispatch(loadReducer(false));
      });
  }
  function fnGoogle() {
    signInWithGoogle()
      .then((res) => {
        if (res.operationType == "signIn") navigate("/");
        dispatch(avisoReducer(["verde", "Você esta Logado com o Google!"]));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        dispatch(loadReducer(false));
      });
    }
    
  return (
    <>
     <span className="requisitosSenha">
            <br />
            <div>Por questões de segurança, a senha deve seguir os critérios abaixo:</div>
            <br />
            <div>•Mínimo 8 caracteres</div>
            <div>•Pelo menos uma letra maiúscula</div>
            <div>•Pelo menos um número</div>
            <div>•Pelo menos um caracter especial (Ex.: !#@$&%*...)</div>
          </span>
      <div className="separadorcontato">
        <div
          className="linhaEscura"
          style={{ marginRight: "20px", background: "black" }}></div>

        <h2>Ou</h2>

        <div
          className="linhaEscura"
          style={{ marginLeft: "20px", background: "black" }}></div>
      </div>
      <button
        className="btnFb btnOutros"
        onClick={() => {
          fnFacebook();
        }}>
        <img src={FB} alt="logo do facebook" />{" "}
        <span> Continuar com Facebook</span>
      </button>
      <button
        className="btnGg btnOutros"
        onClick={() => {
          fnGoogle();
        }}>
        <img src={GG} alt="logo do Google" /> <span> Continuar com Google</span>
      </button>
    </>
  );
}
