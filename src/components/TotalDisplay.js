import React from "react";
import PropTypes from "prop-types";
import styles from "./TotalDisplay.module.module.css"

const isNull = (prop) => {
  if (!prop) {
    return "0";
  }
  return prop;
};

const current = (total, next) => {
  if (total && next) {
    return isNull(next);
  }
  if (total) {
    return total;
  }
  return isNull(next);
};

const TotalDisplay = (props) => {
  const { total, next } = props;

  return (
    <div className={styles['TotalDisplay-wrapper']}>
      <p className={styles['TotalDislay-display']}>{current(total, next)}</p>
    </div>
  );
};

TotalDisplay.defaultProps = {
  total: null,
  next: null,
};

TotalDisplay.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default TotalDisplay;
