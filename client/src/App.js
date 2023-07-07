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
import SearchResults from './components/Results/SearchResults';
import FairfieldCounty from './pages/Counties/FairfieldCounty';
import HartfordCounty from './pages/Counties/HartfordCounty';
import LitchfieldCounty from './pages/Counties/LitchfieldCounty';
import MiddlesexCounty from './pages/Counties/MiddlesexCounty';
import NewHavenCounty from './pages/Counties/NewHavenCounty';
import NewLondonCounty from './pages/Counties/NewLondonCounty';
import TollandCounty from './pages/Counties/TollandCounty';
import WindhamCounty from './pages/Counties/WindhamCounty';
import Property from './pages/Property/Property';
import AddProperty from './pages/Property/AddProperty';

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
              path="/search-results"
              element={<SearchResults />}
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
              path="/hartford-county"
              element={<HartfordCounty />}
            />
            <Route
              path="/litchfield-county"
              element={<LitchfieldCounty />}
            />
            <Route
              path="/middlesex-county"
              element={<MiddlesexCounty />}
            />
            <Route
              path="/new-haven-county"
              element={<NewHavenCounty />}
            />
            <Route
              path="/new-london-county"
              element={<NewLondonCounty />}
            />
            <Route
              path="/tolland-county"
              element={<TollandCounty />}
            />
            <Route
              path="/windham-county"
              element={<WindhamCounty />}
            />
            <Route
              path="/single-property/:propertyId"
              element={<Property />}
            />
             <Route
              path="/add-property"
              element={<AddProperty />}
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
