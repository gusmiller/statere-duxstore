/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: index.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
function Jumbotron({ children }) {
     return (
          <div
               style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
          >
               {children}
          </div>
     );
}

export default Jumbotron;
