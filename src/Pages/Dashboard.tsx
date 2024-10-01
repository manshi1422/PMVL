import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Poster from '../Components/Poster/Poster';
import Reviews from '../Components/Reviews/Reviews';
import DashbordProducts from '../Components/Products/DashboardProducts';
function Dashboard() {
  return (
    <div className="home">
      <Navbar/>
      <Poster/>
      <DashbordProducts/>
      <Reviews/>
    </div>
  );
}

export default Dashboard;
