/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: GlobalState.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
     const [state, dispatch] = useReducer(reducer, {
          products: [],
          cart: [],
          cartOpen: false,
          categories: [],
          currentCategory: '',
     });

     return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
     return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
