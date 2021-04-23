import React from 'react'
import styles from '../style.module.css';

export const NavItem = ({ onClick,img, value, hasImgTag=false,labelVal=-1 }) => {
    if(hasImgTag){
    return (
        <button class={styles.button} onClick={() => onClick()}>
            <img src={img} width="60"></img>
            <label class={styles.label}>${value}</label>
        </button>
    )
    }
    else{
        return (
                    <button class={styles.button} onClick={() => onClick()}>
                        <label class={styles.labelNumber}>{labelVal}</label>
                        <label class={styles.label}>${value}</label>
                    </button> 
        )
    }
}
