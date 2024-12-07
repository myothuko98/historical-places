import Home from './layout/home';
import PlacesList from './pages/PlacesList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PlacesList />} />
      </Route>
    </Routes>
  );
};

export default App;
