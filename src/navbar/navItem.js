import React from 'react'
import { isTypeNode } from 'typescript';
import styles from '../style.module.css';

export const NavItem = ({item, onClick,img, value, hasImgTag=false,labelVal=-1 }) => {
    if(hasImgTag){
        if(item.canhave === true){
            return (
                <button className={styles.button} onClick={() => onClick()}>
                    <img src={img} width="60"></img>
                    <label className={styles.label}>${item.price}</label>
                </button>
            )
        }
        else{
            return null
        }
    
    }
    else{
        if(item.canhave === true){
        return (
            <button className={styles.button} onClick={() => onClick()}>
                <label className={styles.labelNumber}>{labelVal}</label>
                <label className={styles.label}>${value}</label>
            </button> 
        )
        }else{return null}
    }
}
