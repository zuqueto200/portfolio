import React, { useEffect, useState } from "react";
import "./index.css";

export default function Chamada() {
  const stgOla = "";
  const ola = stgOla.split("");

  const stgSou = "Olá, eu sou o Ricardo,";
  const sou = stgSou.split("");

  const stgDev = "Desenvolvedor Front-End.";
  const dev = stgDev.split("");

  function FnOla(i) {
    document.querySelector(".spanOla" + i).classList.add("tonhoin");

    setTimeout(() => {
      document.querySelector(".spanOla" + i).classList.remove("tonhoin");
    }, 1000);
  }
  function FnSou(i) {
    document.querySelector(".spanSou" + i).classList.add("tonhoin");
    setTimeout(() => {
      document.querySelector(".spanSou" + i).classList.remove("tonhoin");
    }, 1000);
  }
  function FnDev(i) {
    document.querySelector(".spanDev" + i).classList.add("tonhoin");
    setTimeout(() => {
      document.querySelector(".spanDev" + i).classList.remove("tonhoin");
    }, 1000);
  }

  function FnStart(i) {
    setTimeout(() => {
      document.querySelector(".spanOla" + i).classList.remove("spanStart");
      FnOla(i);
    }, 80 * i);
  }

  function FnSouStart(i) {
    setTimeout(() => {
      setTimeout(() => {
        document.querySelector(".spanSou" + i).classList.remove("spanStart");
        FnSou(i);
      }, 50 * i);
    }, 800);
  }

  function FnDevStart(i) {
    setTimeout(() => {
      setTimeout(() => {
        document.querySelector(".spanDev" + i).classList.remove("spanStart");
        FnDev(i);
      }, 50 * i);
    }, 1800);
  }

  return (
    <div className="divName">
      <div className="divOla">
        {ola.map((e, i) => (
          <span
            className={"spanOla" + " " + "spanOla" + i + " spanStart"}
            onMouseOver={() => {
              FnOla(i);
            }}
            key={i}>
            <>
              {FnStart(i)}
              {e}
            </>
          </span>
        ))}
      </div>

      <div className="divSou">
        {sou.map((e, i) => (
          <span
            className={"spanSou" + " " + "spanSou" + i + " spanStart"}
            onMouseOver={() => FnSou(i)}
            key={i}>
            {FnSouStart(i)}
            {e}
          </span>
        ))}
      </div>

      <div className="divDev">
        {dev.map((e, i) => (
          <span
            className={"spanDev" + " " + "spanDev" + i + " spanStart"}
            onMouseOver={() => FnDev(i)}
            key={i}>
            {FnDevStart(i)}
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
