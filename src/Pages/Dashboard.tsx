import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Poster from '../Components/Poster/Poster';
import Reviews from '../Components/Reviews/Reviews';
import DashbordProducts from '../Components/Products/DashboardProducts';
import { Link } from 'react-router-dom';
import Banners from '../Components/Banners/Banners';
// import pdf from "../Pages/HoldingStatement.pdf"
function Dashboard() {
  return (
    <div className="home">
      <Navbar/>
      {/* <a href={require("../Pages/HoldingStatement.pdf")} download="myFile">Download file</a> */}
      <Poster/>
      <DashbordProducts/>
      <Banners/>
      <Reviews/>
    </div>
  );
}

export default Dashboard;
