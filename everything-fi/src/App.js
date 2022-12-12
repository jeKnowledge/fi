import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Home } from './containers'
import { DEFAULT } from './urls';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={DEFAULT} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
