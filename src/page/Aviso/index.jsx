import React, { useEffect, useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Aviso(props) {

  const [timer, setTimer] = useState(true);

  useEffect(() => { 
    setTimeout(() => {
      setTimer(false);
    }, 5000);
  }, []);
  return (
    <>
      <div className={timer ? "avisoAlert mover " : "avisoAlert"}>
      {props.text}
        <CloseIcon className="closeIcon" onClick={()=> setTimer(false)} />
      </div>
    </>
  );
}
