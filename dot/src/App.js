
import React from 'react'
import {Navbar,Footer} from './components'

import './App.css';
import {Evento,Faq,Onde,Organizacao} from './containers'

     
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
    
  }
  return (
    <div className="App">
      <Navbar/>
      <Footer/>

    </div>
  );
}

export default App;
