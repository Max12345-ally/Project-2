import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import Tour from './Tour';

const url = `https://course-api.com/react-tours-project`

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(false);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
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
      <Tours tours={tours} />
    </main>
  );
}

export default App;
