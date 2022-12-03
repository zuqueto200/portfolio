import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import "./index.css";
import { useSelector } from "react-redux";

export default function Load() {
  const mostrar = useSelector((state) => state.loading);
  
  useEffect(()=>{
    
    console.log("mostrar", mostrar);

  },[ ])
  return (
    <>
      {mostrar && (
        <div className="load  ">
          <div className="circularProgress">
            <CircularProgress size={80} thickness={6} />
          </div>
        </div>
      )}
    </>
  );
}
