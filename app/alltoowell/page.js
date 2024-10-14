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
      <Link className="p-2 mt-10" href="/Regform">Back</Link>
      <YouTube videoId="sRxrwjOtIag" opts={videoOptions} />
      
      <YouTube videoId="tbEekLA7J3Y" opts={videoOptions} />

      </div>
      <div className={styles.calculatorContainer}>
        {/* Your calculator component */}
      </div>
    </div>
  );
};

export default CalculatorWithVideo;
