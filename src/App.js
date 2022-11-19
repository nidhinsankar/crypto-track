
import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import {makeStyles} from '@material-ui/core'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';
import CoinPage from './pages/CoinPage';

function App() {
  
  const useStyles = makeStyles(()=>({
    App: {
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh'
    },
    home:{
      // marginTop:'40px'
    }
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
        <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/coins/:id' element={ <CoinPage />} />
        </Routes>
        {/* <Footer/> */}
        </div>
    </BrowserRouter>
  );
}

export default App;
