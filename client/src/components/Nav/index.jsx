/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: index.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

     function showNavigation() {
          if (Auth.loggedIn()) {
               return (
                    <ul className="flex-row">
                         <li className="mx-1">
                              <Link to="/orderHistory">
                                   Order History
                              </Link>
                         </li>
                         <li className="mx-1">
                              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                              <a href="/" onClick={() => Auth.logout()}>
                                   Logout
                              </a>
                         </li>
                    </ul>
               );
          } else {
               return (
                    <ul className="flex-row">
                         <li className="mx-1">
                              <Link to="/signup">
                                   Signup
                              </Link>
                         </li>
                         <li className="mx-1">
                              <Link to="/login">
                                   Login
                              </Link>
                         </li>
                    </ul>
               );
          }
     }

     return (
          <header className="flex-row px-1">
               <h1>
                    <Link to="/">
                         <span role="img" aria-label="shopping bag">🛍️</span>
                         -Shop-Shop
                    </Link>
               </h1>

               <nav>
                    {showNavigation()}
               </nav>
          </header>
     );
}

export default Nav;
