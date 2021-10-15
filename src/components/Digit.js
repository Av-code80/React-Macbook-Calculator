import React from "react";
import styles from "./Digit.module.css"


const Digit = () => {

  const handleClick = (e) => {

    return handleClick(e.target.value)
  }

  return (
 <>
 <div className={styles['Digits-container']}>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="7">7</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="8">8</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="9">9</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="4">4</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="5">5</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="6">6</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="1">1</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="2">2</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value="3">3</button>
    <button onClick={handleClick} type="button" className={styles['Digits-null']} value="0">0</button>
    <button onClick={handleClick} type="button" className={styles['Digits-btn']} value=".">.</button>
   

  </div>
  </>
  )};

export default Digit;
