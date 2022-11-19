import React from 'react'
import './App.css';
import {Evento,Onde, Organizacao, Faq} from './containers'

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
      Component = Faq
      break
    default:
      Component = Evento
      break
    
  }
  return (
    <div className="App">
      <Component/>
    </div>
  );
}

export default App;
