
import './App.css';
import Navbar from './components/Navbar';

import AllProducts from './components/AllProduct';
import CategoryProduct from './components/CategoryProduct';
import CartPage from './components/CartPage';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Navbar/>   
      
      <Routes>
          <Route exact path = "/" element = {<Home />} ></Route>
          <Route exact path='/AllProducts' element={<AllProducts  />}></Route>
          <Route path = "/category/:category" element = {<CategoryProduct  />} ></Route>
          <Route path = "/CartPage" element = {<CartPage />} ></Route>
          <Route path = "/search/:searchTerm" element = {<SearchPage />} ></Route>
         
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
