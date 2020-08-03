import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Footer/>
    </div>
  );
}
export default App;
