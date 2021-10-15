import Digit from './components/Digit';
import MainHeader from './components/MainHeader';
import UpperOperator from './components/UpperOperator';
import Operators from './components/Operators';
import Equal from './components/Equal';
import TotalDisplay from './components/Logic';
import styles from './App.module.css';


const App = () => {
  return (
    <>
      <div className={styles["calculator-wrapper"]}>
        <MainHeader />
        <article className={styles.componentWrapper}>
          <div className={styles["claculator-components"]}>
            <TotalDisplay />
            <UpperOperator />
            <Digit />
            <Operators />
            <Equal />
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
