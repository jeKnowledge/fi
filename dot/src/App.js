import React from 'react'
import {Navbar, Onde, Organizacao, Evento} from './components'
import './App.css';

const App = () => {
  let Component
  switch (window.location.pathname) {
    case "/Evento":
      Component = Evento
      break 
    case "/Onde":
      Component = Onde
      break
    case "/Organizacao":
      Component = Organizacao
      break
    case "/Faq":
      Component = Onde
      break
    
  }
  return (
    <div className="App">
      <Navbar/>
      <Component/>
    </div>
  );
}

export default App;
