import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container navbar row">
          <div className="col-5">
            <NavLink to={"/"} className="navbar-brand text-white">
              Add To Cart
            </NavLink>
          </div>
          <ul className="col-7">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <NavLink to={"yourcarts"}>
              <li>
                <Badge badgeContent={100} color="primary">
                  <AddShoppingCartIcon
                    className="text-white"
                    style={{ fontSize: 30, cursor: "pointer" }}
                    onClick={() => setIsActive(!isActive)}
                  ></AddShoppingCartIcon>
                </Badge>
              </li>
            </NavLink>
          </ul>
        </div>

        {/* <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
        Add To Cart
        </a>
        </div>
    </nav> */}
      </div>
      {/* <div>
        {isActive && (
          <div className="menuCart">
            <p>
              Your Cart is Emptydsf <i class="fa-solid fa-xmark-large"></i>
            </p>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Header;
