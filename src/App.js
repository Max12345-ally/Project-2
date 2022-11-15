import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Header from './Header';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Details from './Details';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";


const url = `https://course-api.com/react-tours-project`

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours (tours);  
  }
    useEffect(() => {
      fetchTours();
    }, []);
    

  

  if (loading) {
    return (
      <main>
         <Loading />
      </main>
    );
  }
  return  (
    <main>
      <Header />
      <Routes>
         <Route path="/" element={ <Home tours={tours} /> } />          
         <Route path="/about" element={ <About /> } />
         <Route path="/details/:id" element={ <Details tours={tours} /> } />
          
      </Routes>    
      <Footer />
      
    </main>
  );
}

export default App;
