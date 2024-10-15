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
      let result = eval(input);  // Evaluate the expression (use eval with caution)
      
      // Check if the result is a float (has a decimal point)
      if (result % 1 !== 0) {
        result = result.toFixed(3);  // Limit to 5 decimal places
      }
  
      setInput(result.toString());  // Set the result as the new input
    } catch (error) {
      setInput('Error');  // Handle any errors gracefully
    }
  };
  

  return (
    <div className={styles.calculatorContainer}>
      <div className={styles.calculator}>
        <Link className="rounded-md px-2 py-1  mb-5 font-serif text-base bg-slate-700 opacity-60 text-white" href="/Regform">⬅️ Return to Main Page</Link>
        <div className={styles.display}>
          <input type="text" value={input} readOnly />
        </div>
        
        <div className={styles.buttons}>
          <button onClick={() => handleClick('/')} className={styles.operatorButton}>÷</button>
          <button onClick={() => handleClick('*')} className={styles.operatorButton}>×</button>
          <button onClick={() => handleClick('-')} className={styles.operatorButton}>-</button>
          <button onClick={() => handleClick('+')} className={styles.operatorButton}>+</button>
          
          <button onClick={() => handleClick('7')} className={styles.button}>7</button>
          <button onClick={() => handleClick('8')} className={styles.button}>8</button>
          <button onClick={() => handleClick('9')} className={styles.button}>9</button>
          <button onClick={handleClear} className={styles.clearButton}>C</button>
          
          <button onClick={() => handleClick('4')} className={styles.button}>4</button>
          <button onClick={() => handleClick('5')} className={styles.button}>5</button>
          <button onClick={() => handleClick('6')} className={styles.button}>6</button>
          <button onClick={handleBackspace} className={styles.button}>←</button>
          
          <button onClick={() => handleClick('1')} className={styles.button}>1</button>
          <button onClick={() => handleClick('2')} className={styles.button}>2</button>
          <button onClick={() => handleClick('3')} className={styles.button}>3</button>
          <button onClick={handleEquals} className={styles.equalsButton}>=</button>

          <button onClick={() => handleClick('0')} className={styles.button}>0</button>
          <button onClick={() => handleClick('.')} className={styles.button}>.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
