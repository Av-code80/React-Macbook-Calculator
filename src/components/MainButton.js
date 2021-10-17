import React from 'react'

import styles from './MainButton.module.css'


const MainButton = (props) => {
// e.target.value ??

  return (
   
      <button
        className={`${styles["props.className"]}`}
        type="button"
        onClick={() => props.onClick(props.keyValue)}
      >
        {props.keyValue}
        {""}
      </button>
 
  );
}

export default MainButton
