import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SingleCoin from './pages/SingleCoin';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/coins/:id' element={ <SingleCoin />} />
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
