<<<<<<< Updated upstream
import logo from './logo.svg';
=======
import React from 'react'
import {Navbar,Footer} from './components'
>>>>>>> Stashed changes
import './App.css';
import {Evento,Faq,Onde,Organizacao} from './containers'

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
