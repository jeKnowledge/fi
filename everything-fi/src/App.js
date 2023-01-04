import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Landing } from './containers'
import { DEFAULT } from './urls';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={DEFAULT} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
