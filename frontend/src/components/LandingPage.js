import React, { useState } from 'react';
import Characterbox from './Characterbox';

const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='absolute right-0 px-12 py-2 bg-white rounded-xl mt-10 mr-12'>
        <button>finish</button>
      </div>
      <div className="flex space-x-4 hover ml-5 mb-32">
        <Characterbox />
        <Characterbox />
        <Characterbox />
      </div>

      {/* <div className="flex space-x-4">
        <div className="flex-grow-4 w-96 text-center rounded-lg bg-white p-16 ml-12">AAPL</div>
        <div className="flex-grow-1 right-0 text-center rounded-lg bg-white p-16">AAPL</div>
      </div> */}
    </div>
  );
};

export default LandingPage;