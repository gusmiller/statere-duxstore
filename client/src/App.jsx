/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: App.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import { Outlet } from 'react-router-dom';
import {
     ApolloClient,
     InMemoryCache,
     ApolloProvider,
     createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
     uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
     const token = localStorage.getItem('id_token');
     return {
          headers: {
               ...headers,
               authorization: token ? `Bearer ${token}` : '',
          },
     };
});

const client = new ApolloClient({
     link: authLink.concat(httpLink),
     cache: new InMemoryCache(),
});

function App() {
     return (
          <ApolloProvider client={client}>
               <StoreProvider>
                    <Nav />
                    <Outlet />
               </StoreProvider>
          </ApolloProvider>
     );
}

export default App;
