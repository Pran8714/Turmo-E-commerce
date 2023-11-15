import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { addToCart } from "../features/cartSlice";
import { useState } from "react";
import Alert from "./Alert";
import ProductShimmer from "./ProductShimmer";
import {
   
    getAllProductsByCategory,
    fetchAsyncProductsOfCategory
} from "../features/categorySlice";

const CategoryProduct = (props) => {
  const [alert, setalert] = useState("");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert("null");
    }, 2000);
  };

    const dispatch = useDispatch();
    const { category } = useParams();
    const categoryProducts = useSelector(getAllProductsByCategory);

    const [quantity, setQuantity] = useState(1);

  const addToCartHandler = (ele) => {
    
   
    dispatch(addToCart({ ...ele,quantity: quantity}));
    showAlert("Item added to cart", "success")
 
  }
   
  
    useEffect(() => {
      dispatch(fetchAsyncProductsOfCategory(category));
    }, [dispatch, category]);

if(categoryProducts.length===0){
 return <ProductShimmer/>
}
else{
  return (
    <>
<Alert  alert={alert}/>

  <div className="d-flex justify-content-center" style={{marginTop:"55px"}}>

    <div className=" container   row">
      {categoryProducts && categoryProducts.map((ele) =>(
        <div className=" col-md-4 my-3 ">
          <div className="card" > 
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span
                class="badge rounded-pill text-bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
               Rating {ele.rating}
              </span>
            </div>
            <div>
              <div className="card" >
                <img
                  src={ele.thumbnail}
                  className="card-img-top"
                  alt="..."
                  style={{height:"15rem"}}
                  
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {ele.title}
                  </h5>
                  <p className="card-text">
                    <small style={{ color: "red" }}>
                    ₹{ele.price}&nbsp;&nbsp;&nbsp;{ele.discountPercentage}%&nbsp;off
                    </small>
                  </p>
                  <p className="card-text">{ele.brand}</p>

                  <button   className="btn btn-primary" onClick={() => { addToCartHandler(ele)}}>
                   Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );}
};

export default CategoryProduct;