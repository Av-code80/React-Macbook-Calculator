import React from "react";
import PropTypes from "prop-types";
import styles from "./Operators.module.css"

const Operators = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className={styles['operators-wrapper']}>
      <button
        onClick={handleClick}
        type="button"
        className={styles['Operators-btn']}
        value="÷"
      >
        ÷
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={styles['Operators-btn']}
        value="x"
      >
        ×
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={styles['Operators-btn']}
        value="-"
      >
        −
      </button>
      <button
        onClick={handleClick}
        type="button"
        className={styles['Operators-btn']}
        value="+"
      >
        +
      </button>
    </div>
  );
};

Operators.propTypes = { handleClick: PropTypes.func };

Operators.defaultProps = { handleClick: null };

export default Operators;
