import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';

const GetSerial = () => {
  const [serialData, setSerialData] = useState(null);

  useEffect(() => {
    const fetchSerialData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getAction');
        const data = await response.json();
        console.log('Serial Data:', data);  // Debugging serial data
        setSerialData(data);
      } catch (error) {
        console.error('Error fetching serial data:', error);
      }
    };

    fetchSerialData();

    const interval = setInterval(fetchSerialData, 80);  // Adjust polling to 200ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Serial Data</h1>
      {serialData ? (
        <LandingPage serialData={serialData} />  
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetSerial;
