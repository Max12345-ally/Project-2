import React from 'react';
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="title">
           
            
            <h1>TravelPal</h1>
                <div className="underline"></div>
            <div className="homeAbout">    
                <Link to='/'>
                    <h3 className="home">Home</h3>    
                    </Link>   
                
                         
                
                <Link to='/about'>
                    <h3 className="home">About</h3>    
                </Link>
                </div>
            
        </div>
        
   

    );            
};
export default Header;