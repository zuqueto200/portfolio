import React, { useEffect, useState } from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import FB from "../../../assets/img/fb.png";
import GG from "../../../assets/img/gg.png";
import { auth } from "../../../services/firebaseConfig";
import "./index.css";
import { loadReducer } from "../../../store/items"; 
import { useDispatch } from "react-redux";

export default function Outros() {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] =
    useSignInWithFacebook(auth);
  const dispatch = useDispatch();

  dispatch(loadReducer(loadingGoogle || loadingFacebook ? true : false));
   

  return (
    <>
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
          signInWithFacebook();
        }}>
        <img src={FB} alt="logo do facebook" />{" "}
        <span> Continuar com Facebook</span>
      </button>
      <button
        className="btnGg btnOutros"
        onClick={() => {
          signInWithGoogle();
        }}>
        <img src={GG} alt="logo do Google" /> <span> Continuar com Google</span>
      </button>
    </>
  );
}
