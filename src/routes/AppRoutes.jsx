import React from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "../page/ModalLogin/Login";  
import EsqueciSenha from "../page/ModalLogin/EsqueciSenha";
import Cadastro from "../page/ModalLogin/Cadastro";
import Home from "../page/Home";





export function AppRoutes(){
    return(
 
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/cadastro' element={<Cadastro/>} />
            <Route path='/esqueci-minha-senha' element={<EsqueciSenha/>} />

            {/* <Route exact  path='/' element={<Home/>} /> */}
            {/* <Route path='/portfolio' element={<Home/>} />
            <Route path='/sobre' element={<Home/>} />
            <Route path='/contato' element={<Home/>} /> */}
        </Routes> 

    )
}