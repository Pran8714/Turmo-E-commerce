import React from "react";
import "./ProductShimmer.css";

const ProductShimmer = () => {
  return (
    <div
      className="d-flex  justify-content-center"
      style={{ marginTop: "55px" }}
    >
      <div className="container   row">

        {Array.from({length: 12}).map((el,id)=>{
           
        

           return <div key={id} className="col-md-4  my-3  ">
          <div
            className="card shimmer-img skeleton"
            style={{
              height: "15rem",
              background: "rgb(219, 213, 213)",
              width: "21.7rem",
            }}
          ></div>
          <div
            className="card shimmer-card  "
            style={{
              height: "15rem",
              background: "grey",
              width: "21.7rem",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div className="skeleton"
              style={{
                width: "18rem",
                marginLeft: "2rem",
                height: "1.5rem",
                background: "rgb(219, 213, 213)",
              }}
            ></div>
            <div className="skeleton"
              style={{
                width: "10rem",
                marginLeft: "2rem",
                height: "1.5rem",
                background: "rgb(219, 213, 213)",
              }}
            ></div>
            <div className="skeleton"
              style={{
                width: "7rem",
                marginLeft: "2rem",
                height: "1.5rem",
                background: "rgb(219, 213, 213)",
              }}
            ></div>
            <div className="skeleton"
              style={{
                width: "13rem",
                marginLeft: "2rem",
                height: "1.5rem",
                background: "rgb(219, 213, 213)",
              }}
            ></div>
          </div>
        </div>})}
        
      </div>
    </div>
  );
};

export default ProductShimmer;
