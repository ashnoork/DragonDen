import React, { useEffect, useState } from 'react';
import Characterbox from './Characterbox';

const LandingPage = () => {
  const dragon_count = 3;
  const [selectIndex, setSelectIndex] = useState(0);

  const handleKeydown = (event) => {
    if (event.key === 'ArrowRight') {
      setSelectIndex((prevIndex) => (prevIndex + 1) % dragon_count);
    } else if (event.key === 'ArrowLeft') {
      setSelectIndex((prevIndex) => (prevIndex - 1 + dragon_count) % dragon_count); 
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []) 

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='absolute right-0 px-12 py-2 bg-white rounded-xl mt-10 mr-12'>
        <button>Finish</button>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-10">
        {[...Array(dragon_count)].map((_, index) => (
          <Characterbox key={index} isSelected={index === selectIndex} />
        ))}
        {    console.log(selectIndex)        }
      </div>
    </div>
  );
};

export default LandingPage;
