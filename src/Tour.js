import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Tour = ({ id, image, info, price, name }) => {
    return  <article className='single-tour'>
                <img src={image} alt={name}/>
                <Link to={'/details/' + id}>{name}</Link>
            </article>
               
};
export default Tour;