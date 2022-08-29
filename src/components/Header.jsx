import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const navigate = Navigate();
  const getdata = useSelector((state) => state.reducer.cart);
  // console.log(getdata);

  const [isActive, setIsActive] = useState(getdata.length);
  return (
    <>
      <div className="header">
        <div className="container navbar  row">
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
                <Badge badgeContent={getdata.length} color="primary">
                  <AddShoppingCartIcon
                    className="text-white"
                    style={{ fontSize: 30, cursor: "pointer" }}
                  ></AddShoppingCartIcon>
                </Badge>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
