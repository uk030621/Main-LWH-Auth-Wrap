'use client';  // Ensures that this script runs on the client side

import React, { useState } from 'react';
import styles from './calculator.module.css';
import Link from 'next/link';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (input.length >= 16) return;  // Limiting input to 16 characters
    setInput((prev) => prev + value);
  };

  const handleClear = () => setInput('');  // Clear all input

  const handleBackspace = () => setInput(input.slice(0, -1));  // Remove last character

  const handleEquals = () => {
    try {
      setInput(eval(input).toString());  // Evaluate the expression (use eval with caution)
    } catch (error) {
      setInput('Error');  // Handle any errors gracefully
    }
  };

  return (
    
    <div className={styles.calculatorContainer}>
        
      <div className={styles.calculator}>
      <Link className="ml-2 mb-5" href="/Regform">Back</Link>
        <div className={styles.display}>
          <input type="text" value={input} readOnly />
        </div>
        
        <div className={styles.buttons}>
          <button onClick={handleClear} className={styles.clearButton}>C</button>
          <button onClick={handleBackspace} className={styles.button}>←</button>
          <button onClick={() => handleClick('/')} className={styles.button}>/</button>
          <button onClick={() => handleClick('*')} className={styles.button}>*</button>
          <button onClick={() => handleClick('7')} className={styles.button}>7</button>
          <button onClick={() => handleClick('8')} className={styles.button}>8</button>
          <button onClick={() => handleClick('9')} className={styles.button}>9</button>
          <button onClick={() => handleClick('-')} className={styles.button}>-</button>
          <button onClick={() => handleClick('4')} className={styles.button}>4</button>
          <button onClick={() => handleClick('5')} className={styles.button}>5</button>
          <button onClick={() => handleClick('6')} className={styles.button}>6</button>
          <button onClick={() => handleClick('+')} className={styles.button}>+</button>
          <button onClick={() => handleClick('1')} className={styles.button}>1</button>
          <button onClick={() => handleClick('2')} className={styles.button}>2</button>
          <button onClick={() => handleClick('3')} className={styles.button}>3</button>
          <button onClick={handleEquals} className={styles.equalsButton}>=</button>
          <button onClick={() => handleClick('0')} className={styles.zeroButton}>0</button>
          <button onClick={() => handleClick('.')} className={styles.button}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
