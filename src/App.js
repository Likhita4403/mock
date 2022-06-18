import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './home/Home';
import Footer from './components/footer'
function App() {

  return (

    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
