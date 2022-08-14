import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const YourCarts = () => {
  const [close, setClose] = useState(null);
  return (
    <>
      <div className="yourcats">
        <p style={{ color: "black", fontSize: "50px" }}>
          Your Cart is Empty {"      "}
          <NavLink to={"/"}>
            <CloseIcon style={{ fontSize: "50px" }}></CloseIcon>
          </NavLink>
        </p>
        <ShoppingCartOutlinedIcon
          style={{ fontSize: "100px" }}
        ></ShoppingCartOutlinedIcon>
      </div>
    </>
  );
};

export default YourCarts;
