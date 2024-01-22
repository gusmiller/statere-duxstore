/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: NoMatch.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
     return (
          <div>
               <Jumbotron>
                    <h1>404 Page Not Found</h1>
                    <h1>
                         <span role="img" aria-label="Face With Rolling Eyes Emoji">
                              🙄
                         </span>
                    </h1>
               </Jumbotron>
          </div>
     );
};

export default NoMatch;
