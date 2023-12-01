import React from 'react';

import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails';
import LandingPage from './pages/LandingPage';
function App() {

  return (
   <Router>
    <Routes>
      <Route path='/landing' element={<LandingPage/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
   </Router>
  );
}

export default App;
