import React from 'react'
import styles from '../style.module.css';

export const NavItem = ({ createFish,img, value, hasImgTag=false,labelVal=-1 }) => {
    if(hasImgTag){
    return (
        <button class={styles.button} onClick={createFish}>
            <img src={img} width="60"></img>
            <label class={styles.label}>${value}</label>
        </button>
    )
    }
    else{
        return (
                    <button class={styles.button}>
                        <label class={styles.labelNumber}>{labelVal}</label>
                        <label class={styles.label}>${value}</label>
                    </button> 
        )
    }
}
