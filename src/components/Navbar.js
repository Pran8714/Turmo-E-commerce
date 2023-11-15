import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useState } from "react";
import { getCartTotal } from '../features/cartSlice';
import { fetchAsyncCategories, fetchAsyncProductsOfCategory, getAllCategories } from '../features/categorySlice';
import { fetchAsyncSearchProduct } from "../features/searchSlice";


const Navbar = () => {
    const dispatch = useDispatch();
  
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories())
  }, [dispatch])

  const {carts}= useSelector((state)=> state.allCart);

  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    dispatch(fetchAsyncSearchProduct(searchTerm));
  
  
  }, [searchTerm]);

 
 
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand link-light" >TURMO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active link-light" id='link1' aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active link-light" to="/AllProducts" >All Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active link-light dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="  dropdown-menu">
            
            {
            categories.map((category, idx) => {
              return (
                <li key = {idx} className="nav-link active " >
                  <Link to = {`category/${category}`} className='cat-list-link link-dark text-capitalize' >{category.replace("-", " ")}</Link>
                </li>
              )
            })
        }
           
          </ul>
        </li>
        
        </ul>
  
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
        
        <Link to = {`search/${searchTerm}`}><button className="btn btn-outline-success" type="submit">Search</button></Link>
      </form>
      <ul className="navbar-nav  mb-2 mb-lg-0">
      <li className="nav-item ">
          <Link className="nav-link link-light  " aria-current="page" to="/CartPage">Cart({carts.length})</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
