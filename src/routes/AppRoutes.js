import React from 'react';
import { Route, Routes } from 'react-router';
import Home from 'pages/Home';
import PokemonInfo from 'components/PokemonInfo';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/PokemonInfo" element={<PokemonInfo />} />
    <Route index element={<Home />} />
  </Routes>
);

export default AppRoutes;
