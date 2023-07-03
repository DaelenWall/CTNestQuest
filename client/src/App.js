import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home/Home';
import NoMatch from './pages/NoMatch/NoMatch';
import Login from './pages/Login/Login';
import Favorite from './pages/Favorite/Favorite';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav';
import RentHouse from './pages/RentHouse/RentHouse';
import Results from './components/Results/Results';
import RentApartment from './pages/RentApartment/RentApartment';
import ApartmentResults from "./components/Results/ApartmentResults";
import FairfieldCounty from './pages/Counties/FairfieldCounty';

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
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="houses-for-rent"
              element={<RentHouse />}
            />
            <Route
              path="apartments-for-rent"
              element={<RentApartment />}
              />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/favorite"
              element={<Favorite />}
            />
            <Route
              path="/results"
              element={<Results />}
            />
            <Route
            path="/apartment-results"
            element={<ApartmentResults />}
            />
            <Route
            path="/fairfield-county"
            element={<FairfieldCounty />}
            />
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
