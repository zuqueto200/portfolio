import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { avisoReducer } from "../../store/items/Aviso";

export default function Aviso() {
  const [timer, setTimer] = useState(true);

  const mostrar = useSelector((state) => state.avisando);

  const dispatch = useDispatch();

  if (mostrar[1] != "" && timer) {
    setTimeout(() => {
      setTimer(false);
    }, 5000);
    setTimeout(() => {
      setTimer(true);
      dispatch(avisoReducer(["", ""]));
    }, 7000);
  }

  return (
    <>
      <div
        className={
          "avisoAlert " +
          (timer && mostrar[1] !== "" ? "mover " + mostrar[0] : mostrar[0])
        }>
        {mostrar[1]}
        <CloseIcon className="closeIcon" onClick={() => setTimer(false)} />
      </div>
    </>
  );
}
