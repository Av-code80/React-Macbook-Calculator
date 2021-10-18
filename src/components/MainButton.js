import React from 'react'

import './MainButton.module.css';


const MainButton = (props) => {
// e.target.value ??

  return (
    <button
      className={`${props.nameOfClass}`}
      type="button"
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}
      {""}
    </button>
  );
}

export default MainButton

//  className={`${styles["props.className"]}`}