/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: index.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
     return (
          <span {...props} role="button" tabIndex="0">
               ✗
          </span>
     );
}

export default DeleteBtn;
