import React from 'react';
import { useParams } from 'react-router-dom'

const Details = ({tours}) => {
    const {id} = useParams()
        let tour = tours.find(t => t.id === id);
       
    return (
        <footer>
        <div className='tour-info'>
            <h3>{tour.name}</h3>
            <h3 classNAme ='tour-price'>${tour.price}</h3>

        </div>
        <p>{tour.info}</p>
    </footer>

    )
  
               
};
export default Details;