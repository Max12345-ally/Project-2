import React from 'react';
import Tour from './Tour';

const Tours = ({tours}) => {
    console.log(tours.length)
 
    return (
        <section>
            <div className="title">
                <h2>Best city tours</h2>
                <div className="underline"></div>
            </div>
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
