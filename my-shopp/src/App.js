import React from 'react';

import logo from './logo.svg';
import './App.css';
import{ BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home'; 
import ProductDetails from './pages/ProductDetails';
import SideBar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    <SideBar/>
    <Blog/>
    <Contact/>
    <Footer/>
   </Router>
  );
}

export default App;
