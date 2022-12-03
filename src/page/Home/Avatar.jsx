import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Ava from "../../assets/img/ava.png";
import Aviso from "../Aviso";

import { loadReducer } from "../../store/items";
import { useDispatch } from "react-redux";

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
      if (user) {
        user.photoURL ? setDadosUser(user.photoURL) : setDadosUser(Ava);

        console.log("on", user);
      } else {
        setDadosUser(Ava);
        console.log("off", user);
      }
    });
  }, [anchorEl]);

  const [signOut, loadingOut, errorOut] = useSignOut(auth);

  dispatch(loadReducer(loadingOut ? true : false));

  return (
    <div>
      {/* <Aviso text='TESTANDO' /> */}
      {/* {loadingOut && <Load />} */}
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
          onClick={async () => {
            const success = await signOut();
            if (success) {
              handleClose();
            }
          }}>
          Sair
        </MenuItem>
      </Menu>
    </div>
  );
}
