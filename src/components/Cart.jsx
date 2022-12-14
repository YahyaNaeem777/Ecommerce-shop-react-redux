import React, { useState } from "react";
import CartData from "./CartData";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cart = () => {
  const [data, setData] = useState(CartData);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((element, id) => {
            return (
              <>
                <div className="col" key={element.id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={element.imgdata}
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.rname}</h5>
                      <p className="card-text">Price : ₹ {element.price}</p>
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            send(element);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
