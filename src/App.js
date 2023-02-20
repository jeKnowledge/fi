import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Landing, Team } from './containers'
import { DEFAULT, TEAM } from './urls';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={DEFAULT} element={<Landing />} />
        <Route exact path={TEAM} element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
