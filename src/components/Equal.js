import React from "react";
import PropTypes from "prop-types";
import styles from "./Equal.module.css"

const Equal = (props) => {
  const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
  };

  return (
    <div className={styles['Equal-wrapper']}>
      <button
        onClick={handleClick}
        type="button"
        className={styles.equalButton}
        value="="
      >
        =
      </button>
    </div>
  );
};

Equal.propTypes = { handleClick: PropTypes.func };

Equal.defaultProps = { handleClick: null };

export default Equal;
