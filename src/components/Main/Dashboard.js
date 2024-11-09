import React from "react";
import Aside from "./Aside";
import Navbar from "../Header/Navbar";


// cpanel components
import Cards from './cpanel/cards';
import Charts from './cpanel/charts';

import Footer from '../Footer/Footer';

function Dashboard() {
  return (
    <div>
        <h4> Dashboard content completed</h4>
        <Aside />
        <main className="main-content position-relative border-radius-lg ">
            <Navbar/>
            <div className="container-fluid py-4">
                <Cards />
                <Charts/>
                <Footer />
            </div>
        </main>
    </div>
  );
}

export default Dashboard;