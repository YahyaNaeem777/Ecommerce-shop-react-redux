import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CartDetail = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center">Item Details</h2>
        <div className="row d-flex justify-content-center mt-5">
          <div className="imgDetail col-lg-3 col-md-12">
            <img
              style={{ width: "300px", height: "350px" }}
              src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
            />
          </div>
          <div className="col-lg-9 col-md-12 mt-5">
            <div className="row">
              <div className="infoOne col-lg-6 col-md-6">
                <p>
                  <strong>Restaurant:</strong> Masala
                </p>
                <p>Theory</p>
                <p>
                  <strong>Dishes:</strong> Karachi Beryani Mughal
                </p>
                <p>
                  <strong>Total:</strong> ₹350
                </p>
              </div>
              <div className="infoTwo col-lg-6 col-md-6">
                <p>
                  <strong>Rating: </strong>
                  <span>3.8 ⭐</span>
                </p>
                <p>
                  <strong>Order Review:</strong> 1175 + order placed from here
                  recently
                </p>
                <p>
                  <strong>Remove:</strong>{" "}
                  <DeleteOutlineOutlinedIcon color="error" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
