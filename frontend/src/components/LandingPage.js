import React, { useEffect, useState } from 'react';
import Characterbox from './Characterbox';

const LandingPage = ({ serialData }) => {
  const dragon_count = 3;
  const [selectIndex, setSelectIndex] = useState(0);

  // Function to handle toggling the index based on serial data
  const handleSerialToggle = (data) => {
    if (data[1] === 'Right') {
      setSelectIndex((prevIndex) => (prevIndex + 1) % dragon_count);
    } else if (data[1] === 'Left') {
      setSelectIndex((prevIndex) => (prevIndex - 1 + dragon_count) % dragon_count);
    }
  };

  useEffect(() => {
    // Every time the serialData changes, check for 'toggle, left' or 'toggle, right'
    if (serialData) {
      handleSerialToggle(serialData);
    }
  }, [serialData]);  // Re-run this effect when serialData changes

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='absolute right-0 px-12 py-2 bg-white rounded-xl mt-10 mr-12'>
        <button>Finish</button>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-10">
        {[...Array(dragon_count)].map((_, index) => (
          <Characterbox key={index} isSelected={index === selectIndex} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
