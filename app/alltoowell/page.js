'use client';

import React from 'react';
import styles from './taylor.module.css';
import Link from 'next/link';
import YouTube from 'react-youtube';

const CalculatorWithVideo = () => {
    const videoOptions = {
      height: '315',
      width: '560',
      playerVars: {
        autoplay: 0, // Don't autoplay video
      },
    };
  
    return (
    
    <div className={styles.container}>
      <div className={styles.videoContainer}>
      <Link className="rounded-md px-2 py-1  mb-5 font-serif text-base bg-slate-700 opacity-60 text-white" href="/Regform">⬅️ Return to Main Page</Link>
      <h1 className='mt-5 mb-2 font-serif'>All To Well by Taylor Swift</h1>
      <YouTube videoId="sRxrwjOtIag" opts={videoOptions} />
      <h1 className='mt-5 mb-2 font-serif'>THE MAN by Taylor Swift</h1>
      <YouTube videoId="tbEekLA7J3Y" opts={videoOptions} />
      <h1 className='mt-5 mb-2 font-serif'>You are on your own kid by Taylor Swift</h1>
      <YouTube videoId="7Gbg6Z70J7E" opts={videoOptions} />

      </div>
      <div className={styles.calculatorContainer}>
        <h1 className='font-thin font-serif text-4xl'>NO ADVERTS!!!</h1>
        {/* Your calculator component */}
      </div>
    </div>
  );
};

export default CalculatorWithVideo;
