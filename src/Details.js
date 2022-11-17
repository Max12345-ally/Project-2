import React from 'react';
import { useParams } from 'react-router-dom'

const Details = ({tours}) => {
    const {id} = useParams()
        let tour = tours.find(t => t.id === id);
        console.log(tour)
    return (
        <footer>
        <div className='tour-info'>
            <h4>{tour.name}</h4>
            <h4 classNAme ='tour-price'>${tour.price}</h4>

        </div>
        <p>{tour.info}</p>
    </footer>

    )
  
               
};
export default Details;