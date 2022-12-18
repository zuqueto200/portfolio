import React, { useEffect, useState } from "react";
import "./index.css";
var estadoAnterior = 0

export default function ForcaSenha(props) {
 
  const [forca, setForca] = useState(0);
  const [ea, setEa] = useState('inicio');


  useEffect(()=>{

 if(forca > estadoAnterior) {setEa('mais'); estadoAnterior = forca;}
 if(forca < estadoAnterior) {setEa('menos'); estadoAnterior = forca;}

 

  },[forca])
useEffect(()=>{
  setForca(props.etapa)
},[props])


  return (
    <>
      <div className="barras">
        <div className="bar">
          <div className={(forca == 0 && ea =='inicio') ? 'barraVazia bar1 ' : (forca == 1 && ea == 'mais') ? 'barraEnchendo bar1' : (forca == 0 && ea == 'menos') ? 'barraEsvaziando bar1' : forca == 1 ? 'barraCheia bar1 ' :   forca == 2 ? 'barraCheia bar2 ' :   forca == 3 ? ' barraCheia bar3 ' : ' barraCheia bar4 '} ></div>
        </div>
        <div className="bar">
          <div className={(forca == 2 && ea == 'mais') ? 'barraEnchendo bar2' : (forca == 1 && ea == 'menos') ? 'barraEsvaziando bar2' : (forca == 2) ? 'barraCheia bar2' : (forca == 3) ? 'barraCheia bar3' : (forca == 4) ? 'barraCheia bar4' : 'bar2'} ></div>
        </div>
        <div className="bar">
          <div className={(forca == 3 && ea == 'mais') ? 'barraEnchendo bar3 ' : (forca == 2 && ea == 'menos') ? 'barraEsvaziando bar3' : (forca == 3) ? 'barraCheia bar3' : (forca == 4) ? 'barraCheia bar4' : 'bar3'} ></div>
        </div>
        <div className="bar">
          <div className={(forca == 4 && ea == 'mais') ? 'barraEnchendo bar4 ' : (forca == 3 && ea == 'menos') ? 'barraEsvaziando bar4' : (forca >= 4)  ? 'barraCheia bar4' : ' bar4'} ></div>
        </div>
      </div> 
    </>
  );
}
