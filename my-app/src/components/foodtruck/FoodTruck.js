import React, { useState, useEffect } from "react";
import axios from "axios";

//* import TruckCard 
//* export to 'more info button' on homepage 

// FoodTruck component includes: 
// Menu and back button icon, 
// <TruckCard /> component rendered below

export default function FoodTruck() {
    return (
        <>
            <nav className="FoodTruck-nav">
            <div className="FoodTruck-nav-links">
                <Link to='/'>Menu Icon</Link>
                <Link to='/'>Back Button</Link>
                {/* UseHistory method on the back button?*/}
            </div>
        </nav>
        <button>Get Directions</button>
        </>
    )
}