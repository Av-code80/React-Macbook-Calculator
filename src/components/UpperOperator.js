import React from 'react'
import styles from './UpperOperator.module.css'


const UpperOperator = (props) => {

    const handleClick = (e) => {
    const { handleClick } = props;
    handleClick(e.target.value);
    }
    return (
        <div className={styles['upper-wrapper']}>
            
            <button  onClick={handleClick} type="button" className={styles['upper-btn']}
            value="Ac">Ac</button>
            <button onClick={handleClick} type="button" className={styles['upper-btn']}
            value="+/-">+/-</button>
            <button onClick={handleClick} type="button" className={styles['upper-btn']}
            value="%">%</button>

        </div>
    )
}

export default UpperOperator
