/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: Home.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
     return (
          <div className="container">
               <CategoryMenu />
               <ProductList />
               <Cart />
          </div>
     );
};

export default Home;
