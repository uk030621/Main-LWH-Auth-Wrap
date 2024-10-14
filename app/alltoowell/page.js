'use client';

import React, { useState } from 'react';
import styles from './taylor.module.css';
import Link from 'next/link';
import YouTube from 'react-youtube';

const CalculatorWithVideo = () => {
    const [loading, setLoading] = useState({
        video1: true,
        video2: true,
        video3: true,
        video4: true,
    });

    const videoOptions = {
        height: '315',
        width: '560',
        playerVars: {
            autoplay: 0, // Don't autoplay video
        },
    };

    const handleVideoReady = (videoIndex) => {
        setLoading((prev) => ({ ...prev, [videoIndex]: false }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.videoContainer}>

                <Link className="rounded-md px-2 py-1 mb-5 font-serif text-base bg-slate-700 opacity-60 text-white" href="/Regform">⬅️ Return to Main Page</Link>
                <h1 className='mt-5 mb-2 font-serif'>All Too Well by Taylor Swift</h1>
                {loading.video1 && <p>Loading...</p>}
                <YouTube videoId="sRxrwjOtIag" opts={videoOptions} onReady={() => handleVideoReady('video1')} />

                <h1 className='mt-5 mb-2 font-serif'>THE MAN by Taylor Swift</h1>
                {loading.video2 && <p>Loading...</p>}
                <YouTube videoId="tbEekLA7J3Y" opts={videoOptions} onReady={() => handleVideoReady('video2')} />

                <h1 className='mt-5 mb-2 font-serif'>You Are on Your Own, Kid by Taylor Swift</h1>
                {loading.video3 && <p>Loading...</p>}
                <YouTube videoId="7Gbg6Z70J7E" opts={videoOptions} onReady={() => handleVideoReady('video3')} />

                <h1 className='mt-5 mb-2 font-serif'>The Very Best OF Ian Hislop - HIGNFY</h1>
                {loading.video4 && <p>Loading...</p>}
                <YouTube videoId="V0QTxnzxstU" opts={videoOptions} onReady={() => handleVideoReady('video3')} />
                  
            </div>

            <div className={styles.calculatorContainer}>
                <h1 className='font-thin font-serif text-4xl'>NO ADVERTS!!!</h1>
                {/* Your calculator component */}
            </div>
        </div>
    );
};

export default CalculatorWithVideo;
