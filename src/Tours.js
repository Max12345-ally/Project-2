import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
    
 
    return (
        <section>
            
            <div>
                {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} ></Tour>;  
            }
            )}
            </div>
        </section>
    );
};

export default Tours;
