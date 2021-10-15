import React from "react";
import PropTypes from "prop-types";
import styles from "./Logic.module.css"

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

const Logic = (props) => {
  const { total, next } = props;

  return (
    <div className={styles['logic-wrapper']}>
      <p className={styles['logic-display']}>{current(total, next)}</p>
    </div>
  );
};

Logic.defaultProps = {
  total: null,
  next: null,
};

Logic.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default Logic;
