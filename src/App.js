import React, { useState, useEffect } from "react";

import Digit from "./components/Digit";
import MainHeader from "./components/MainHeader";
import UpperOperator from "./components/UpperOperator";
import Operators from "./components/Operators";
import Equal from "./components/Equal";
import TotalDisplay from "./components/TotalDisplay";
import styles from "./App.module.css";
import calculate from "./components/logic/calculate";

const App = () => {
  const initialObj = { total: null, next: null, operation: null };
  const [state, setState] = useState(initialObj);
  const [error, setError] = useState({ status: false });

  const updateState = (newState) =>
    setState((actualState) => ({ ...actualState, ...newState }));

  const errorHandler = () => {
    setError({ status: true });
    setState({
      total: "Invalid operation: Can't Divide by Zero",
      next: null,
      operation: null,
    });
  };

  useEffect(() => {
    if ("savedInput" in error) {
      setError({ status: false });

      const output = calculate(state, error.savedInput);
      updateState(output);
    }
  }, [error]);

  const handleClick = (buttonName) => {
    if (error.status) {
      setError({ savedInput: buttonName });
      setState(initialObj);
      return;
    }

    let output;
    try {
      output = calculate(state, buttonName);
    } catch (err) {
      errorHandler();
    }
    updateState(output);
  };

  return (
    <>
      <div className={styles["calculator-wrapper"]}>
        <MainHeader />
        <article className={styles.componentWrapper}>
          <div className={styles["claculator-components"]}>
            <TotalDisplay handleClick={handleClick} />
            <UpperOperator handleClick={handleClick} />
            <Digit handleClick={handleClick} />
            <Operators handleClick={handleClick} />
            <Equal handleClick={handleClick} />
          </div>
        </article>
      </div>
    </>
  );
};

export default App;
