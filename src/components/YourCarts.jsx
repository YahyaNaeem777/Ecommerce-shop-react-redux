import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const YourCarts = () => {
  const getdata = useSelector((state) => state.reducer.cart);

  // const [close, setClose] = useState(null);
  return (
    <>
      <div className="container yourcarts">
        {getdata.length ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Photo</th>
                  <th scope="col">Restaurant Name</th>
                </tr>
                <tbody className="tbody">
                  {getdata.map((e) => {
                    return (
                      <tr scope="row">
                        <td scope="col">
                          <img
                            src={e.imgdata}
                            style={{ width: "5rem", height: "6rem" }}
                          />
                        </td>
                        <td scope="col">
                          <p>{e.rname}</p>
                          <p>{e.price}</p>
                          <p>{e.qnty}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </thead>
            </table>
          </div>
        ) : (
          <div>
            <p style={{ color: "black", fontSize: "50px" }}>
              Your Cart is Empty
              <NavLink to={"/"}>
                <CloseIcon style={{ fontSize: "50px" }}></CloseIcon>
              </NavLink>
            </p>
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "100px" }}
            ></ShoppingCartOutlinedIcon>
          </div>
        )}
      </div>
    </>
  );
};

export default YourCarts;
