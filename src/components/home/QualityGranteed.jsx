import React from 'react';
import checkedWhite from '../../assets/home/checked-white.png';
import { Link } from 'react-router-dom';

const QualityGranteed = () => {
  return (
    <div className='bg-red-600 py-16'>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center sm:w-2/3 mx-auto leading-tight">
        Quality Guaranted
      </h1>
      
      <p className="text-lg sm:text-xl text-white text-center mt-4 max-w-xl mx-auto">
        At Trend Car Care, we ensure the highest standards of car cleaning with every service we provide.
      </p>

      <div className='flex flex-wrap justify-center gap-10 mt-8'>
        <div className='flex items-center gap-4'>
          <img src={checkedWhite} alt="Checked White" className='w-6 h-6' />
          <p className="text-white text-lg sm:text-xl">100% Hand Washed</p>
        </div>
        <div className='flex items-center gap-4'>
          <img src={checkedWhite} alt="Checked White" className='w-6 h-6' />
          <p className="text-white text-lg sm:text-xl">Quality Guaranted</p>
        </div>
        <div className='flex items-center gap-4'>
          <img src={checkedWhite} alt="Checked White" className='w-6 h-6' />
          <p className="text-white text-lg sm:text-xl">SMS When Ready</p>
        </div>
        <div className='flex items-center gap-4'>
          <img src={checkedWhite} alt="Checked White" className='w-6 h-6' />
          <p className="text-white text-lg sm:text-xl">1.1+ Million Cars Cleaned Last Year</p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link 
          to="contact-us" 
          className="bg-red-600 text-white shadow-lg border-white border-2 hover:bg-white hover:text-red-600 p-4 px-8 rounded-4xl text-lg font-semibold transition-colors duration-300 delay-75"
        >
          Book Online
        </Link>
      </div>
    </div>
  );
};

export default QualityGranteed;
