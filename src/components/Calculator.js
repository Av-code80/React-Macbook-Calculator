import React, { useState, useEffect } from "react";
import MainButton from "./MainButton";

import styles from "./Calculator.module.css";

function Calculator() {
  const [nextValue, setNextValue] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);

  useEffect(() => {}, [prevValue, nextValue, operation]);

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const handleDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };

  const handlePercentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };

  const handleChangeSigne = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };

  const handleClearData = () => {  // ???
    setNextValue("0");
    setPrevValue("0");
  };

  const operationCalculator = {
    "÷": (firstVal, secondVal) => firstVal / secondVal,
    "×": (fisrtVal, secondVal) => fisrtVal * secondVal,
    "+": (fisrtVal, secondVal) => fisrtVal + secondVal,
    "-": (firstVal, secondVal) => firstVal - secondVal,
    "=": (firstVal, secondVal) => secondVal,
  };

  const handleOperation = () => {
    const res = operationCalculator[operation](  
      parseFloat(prevValue),
      parseFloat(nextValue)
    );

    setOperation(null);
    setNextValue(String(res));
    setPrevValue(null);
  };

  const handlerFunction = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in operationCalculator) {
      setOperation(value);
      if (operation === null) {
        setPrevValue(nextValue);
        setNextValue("");
      } 
      if (prevValue && nextValue && operation) {
        handleOperation();
      }      
      // else if (value === "AC") {   //??
      //   handleClearData(); 
      // } else if (value === "+/-") {  //??
      //   handleChangeSigne();
      // } else if (value === ".") {
      //   handleDot();
      // } else if (value === "%") {
      //   handlePercentage();
      // }
    }
  };

  return (
    <>
      <div className={styles["calculator-wrapper"]}>
        <div className={styles["calculator-display"]}>
          <div className={styles.totalDisplay}>{nextValue}</div>
        </div>
        <div className={styles["calculator-Keyboard"]}>
          <div className={styles.keysFunction}>
            <MainButton nameOfClass={styles.functionColor} keyValue={"AC"} onClick={handleClearData} />
            <MainButton nameOfClass={styles.functionColor} keyValue={"+/-"} onClick={handleChangeSigne} />
            <MainButton nameOfClass={styles.functionColor} keyValue={"%"} onClick={handlePercentage} />
          </div>
          <div className={styles.keysOperation}>
            <MainButton nameOfClass={styles.orangeOperation} keyValue={"÷"} onClick={handlerFunction} />
            <MainButton nameOfClass={styles.orangeOperation} keyValue={"×"} onClick={handlerFunction} />
            <MainButton nameOfClass={styles.orangeOperation} keyValue={"-"} onClick={handlerFunction} />
            <MainButton nameOfClass={styles.orangeOperation} keyValue={"+"} onClick={handlerFunction} />
            <MainButton nameOfClass={styles.orangeOperation} keyValue={"="} onClick={handlerFunction} />
          </div>
          <div className={styles.keysDigits}>
            <MainButton keyValue={7} onClick={handlerFunction} />
            <MainButton keyValue={8} onClick={handlerFunction} />
            <MainButton keyValue={9} onClick={handlerFunction} />
            <MainButton keyValue={4} onClick={handlerFunction} />
            <MainButton keyValue={5} onClick={handlerFunction} />
            <MainButton keyValue={6} onClick={handlerFunction} />
            <MainButton keyValue={1} onClick={handlerFunction} />
            <MainButton keyValue={2} onClick={handlerFunction} />
            <MainButton keyValue={3} onClick={handlerFunction} />
            <MainButton
              nameOfClass={styles.keyZero}
              keyValue={0}
              onClick={handlerFunction}
            />
            <MainButton
              keyValue={"."}
              nameOfClass={styles.keyDat}
              onClick={handleDot}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
