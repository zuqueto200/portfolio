import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Ava from "../../assets/img/ava.png"; 
import Sem from "../../assets/img/sem.png"; 

import { loadReducer } from "../../store/items/Load";
import { useDispatch } from "react-redux";
import { avisoReducer } from "../../store/items/Aviso";

export default function AvatarLogin() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [dadosUser, setDadosUser] = useState();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log('user',user)
      if (user) {
        user.photoURL ? setDadosUser(user.photoURL) : setDadosUser(Sem);
      } else {
        setDadosUser(Ava);
      }
    });
  }, [anchorEl]);

  const [signOut, loadingOut, errorOut] = useSignOut(auth);

  useEffect(() => {
    dispatch(loadReducer(loadingOut ? true : false));
  }, [loadingOut]);

  function fnLogout() {
    signOut()
    .then((res) => {
      if (res.operationType == "signIn") navigate("/");
      dispatch(avisoReducer(["verde", "Logout realizado com sucesso!"]));
    })
    .catch((err) => {
      console.error(err);
      })
      .finally(() => {
        dispatch(loadReducer(false)); 
      });
  }



  return (
    <div> 
      <Button
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <img className="imgAva" src={dadosUser} referrerPolicy="no-referrer" />
      </Button>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem
          onClick={() => {
            navigate("/login");
            handleClose();
          }}>
          Login
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/cadastro");
            handleClose();
          }}>
          Cadastrar
        </MenuItem>
        <MenuItem
          onClick={fnLogout}>
          Sair
        </MenuItem>
      </Menu>
    </div>
  );
}
