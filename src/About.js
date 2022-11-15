import React, { useState } from 'react';
import videoParis from './assets/paris.mp4'

const About = () => {
    return (

        <div>
            
            <div className='video'>
                <video src ={videoParis} autoPlay muted loop></video>
                <div className="content">
                    <h3>This app is for travel addicted people.</h3>
                </div>
            </div>
            
        </div>





    )
               
};
export default About;