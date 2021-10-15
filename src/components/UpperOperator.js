import React from 'react'
import styles from './UpperOperator.module.css'


const UpperOperator = () => {
    return (
        <div className={styles['upper-wrapper']}>
            
            <button type="button" className={styles['upper-btn']}
            value="Ac">Ac</button>
            <button type="button" className={styles['upper-btn']}
            value="+/-">+/-</button>
            <button type="button" className={styles['upper-btn']}
            value="%">%</button>

        </div>
    )
}

export default UpperOperator
