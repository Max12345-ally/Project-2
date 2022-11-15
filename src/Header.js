import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="title">
                <h1>Best City Tours</h1>
                <div className="underline"></div>
            <Link to='/'>
            <h1>Home</h1>    
            </Link>
            <Link to='/about'>
            <h1>About</h1>    
            </Link>
            </div>
        
   

    );            
};
export default Header;