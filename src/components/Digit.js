import React from "react";
import styles from "./Digit.module.css"


const Digit = () => {
  return (
 <>
 <div className={styles['Digits-container']}>
    <button type="button" className={styles['Digits-btn']} value="7">7</button>
    <button type="button" className={styles['Digits-btn']} value="8">8</button>
    <button type="button" className={styles['Digits-btn']} value="9">9</button>
    <button type="button" className={styles['Digits-btn']} value="4">4</button>
    <button type="button" className={styles['Digits-btn']} value="5">5</button>
    <button type="button" className={styles['Digits-btn']} value="6">6</button>
    <button type="button" className={styles['Digits-btn']} value="1">1</button>
    <button type="button" className={styles['Digits-btn']} value="2">2</button>
    <button type="button" className={styles['Digits-btn']} value="3">3</button>
    <button type="button" className={styles['Digits-null']} value="0">0</button>
    <button type="button" className={styles['Digits-btn']} value=".">.</button>
   

  </div>
  </>
  )};

export default Digit;
