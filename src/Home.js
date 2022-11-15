import React, { useState } from 'react';
import Tours from './Tours'

const Home = ({tours}) => {
    return  (
        <Tours tours={tours} /> 
    )
  
               
};
export default Home;