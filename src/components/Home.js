import React from "react";
import Carousel from "react-bootstrap/Carousel";
import sale1 from "../assets/sale1.jpg";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/sale3.jpg";
import cate1 from "../assets/cate1.jpg";
import cate2 from "../assets/cate2.jpg";
import cate3 from "../assets/cate3.jpg";
import cate4 from "../assets/cate4.jpg";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="first">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src={sale1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src={sale2}
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src={sale3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="section2">
        <div className="cat">
          <Link to={`category/smartphones`} style={{ color: "white" }}>
            <div>
              <img
                src={cate1}
                alt=""
                className="catimg"
              />
            </div>
            Smartphones
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/laptops`} style={{ color: "white" }}>
            <div>
              <img
                src={cate2}
                alt=""
                className="catimg"
              />
            </div>
            Laptops
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/fragrances`} style={{ color: "white" }}>
            <div>
              <img
                src={cate3}
                alt=""
                className="catimg"
              />
            </div>
            Fragrances
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/skincare`} style={{ color: "white" }}>
            <div>
              <img
                src={cate4}
                alt=""
                className="catimg"
              />
            </div>
            Skincare
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/groceries`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Groceries
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/home-decoration`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Home Decoration
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/furniture`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Furniture
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/tops`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Tops
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/womens-dresses`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Womens Dresses
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/womens-shoes`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Womens Shoes
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/mens-shirts`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Mens Shirts
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/lighting`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Lighting
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/mens-shoes`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Mens Shoes
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/mens-watches`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Mens Watches
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/womens-watches`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Womens Watches
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/womens-bags`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Womens Bags
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/womens-jewellery`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Womens Jewellery
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/sunglasses`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Sunglasses
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/automotive`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Automotive
          </Link>
        </div>
        <div className="cat">
          <Link to={`category/motorcycle`} style={{ color: "white" }}>
            <div>
              <img
                src={sale1}
                alt=""
                className="catimg"
              />
            </div>
            Motorcycle
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
