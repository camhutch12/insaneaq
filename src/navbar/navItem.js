import React from 'react'
import styles from '../style.module.css';

export const NavItem = ({ onClick,img, value, hasImgTag=false,labelVal=-1 }) => {
    if(hasImgTag){
    return (
        <button className={styles.button} onClick={() => onClick()}>
            <img src={img} width="60"></img>
            <label className={styles.label}>${value}</label>
        </button>
    )
    }
    else{
        return (
            <button className={styles.button} onClick={() => onClick()}>
                <label className={styles.labelNumber}>{labelVal}</label>
                <label className={styles.label}>${value}</label>
            </button> 
        )
    }
}
