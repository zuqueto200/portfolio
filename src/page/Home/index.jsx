import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "../Contato";
import Footer from "../Footer"; 
import Inicio from "../Inicio";
import Portfolio from "../Portfolio";
import Sobre from "../Sobre";

import "./index.css";
import { Menu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  const pp = useRef(null);
  const ss = useRef(null);
  const cc = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function scroll(eleRef) {
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <>
    
    
      <div className="header">
        <span className="caixaLogo">
          <span className="logoHeader">DEVELOPER</span>
          <span className="logoHeader2">&lt; front-end /&gt;</span>
        </span>
        <span className="menuHeader">
          <button onClick={()=> scroll(pp)} className="menuItem"> PORTFÓLIO</button>
          <button onClick={()=> scroll(ss)} className="menuItem"> SOBRE</button>
          <button onClick={()=> scroll(cc)} className="menuItem"> CONTATO</button>
        </span>

       
          <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="menuIconMobile" />
      
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={""}
          onClose={() => setIsOpen(false)}>

          <Item itemKey={"portfolio"} text={"Portfólio"}></Item>
          <Item itemKey={"sobre"} text={"Sobre"}></Item>
          <Item itemKey={"contato"} text={"Contato"}></Item>

        </Menu>
      </div>






      <BrowserRouter>
        <Routes>{/* <Route path='/' element={<Header/>}/> */}</Routes>
      </BrowserRouter>
 
      <Inicio />
      <div ref={pp}></div>
      <Portfolio />
      <div ref={ss}></div>
      <Sobre />
      <div ref={cc}></div>
      <Contato />
      <Footer />
    </>
  );
}
