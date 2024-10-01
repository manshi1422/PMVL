import React from 'react';
import logo from './logo.svg';
import Products from './Components/Products/Product';
import Navbar from './Components/Navbar/Navbar';
import Poster from './Components/Poster/Poster';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="home">
      <Navbar/>
      <Poster/>
      <Products/>
      <Reviews/>
    </div>
  );
}

export default App;
