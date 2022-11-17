import React from 'react';
import videoParis from './assets/paris.mp4'

const About = () => {
    return (

        <div>
             <div className="content">
                    <h2>This app is for travel addicted people</h2>
                </div>
            
            <div className='video'>
                <video src ={videoParis}  autoPlay muted loop></video>
               
            </div>
            
        </div>





    )
               
};
export default About;