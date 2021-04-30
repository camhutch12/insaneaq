import React,{useState} from 'react'

import styles from '../style.module.css';

export const NavItem = ({item, onClick,img, value, hasImgTag=false,labelVal=-1 }) => {
    const [temp, setTemp] = useState(0);
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
