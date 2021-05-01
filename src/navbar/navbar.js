import { NavItem } from "./navItem";
import {useEffect,useState} from 'react'
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
import {Carnivore} from '../model/carnivore';
import {randomNumber,CONSTANTS} from '../util/utilities'
import {Crumb} from '../model/crumb'
const Navbar = ({levelParams,...props}) => {
let [qImg,setQimg] = useState(() => Crumb.getCrumbImage())
  useEffect(() => {
      console.log("Rerendering")
    setQimg(Crumb.getCrumbImage())
    console.log(Crumb.getCrumbImage())
      return () => {
          setQimg(Crumb.getCrumbImage())
      }
  },[qImg])
    const money = 0;
    const increaseFoodLimit = () => {
        if(props.player[0].coins >= 200){
            props.player[0].food += 1;
            props.player[0].coins -= 200;
        }
    }

    const createGoldFish= () =>{
        if(props.player[0].coins >= 100){
            
            props.createFish(new GoldFish(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)));
            props.player[0].coins -= 100;
        }
    }

    const createCarnivore=() =>{
        if(props.player[0].coins >= 1000){
        props.createCarnivore(new Carnivore(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)))
        props.player[0].coins -= 1000;
        }
    }

    const levelUp =(item) =>{
        if(props.player[0].coins >= item.price){
        props.isLevelup()
        }

    }

    const upgradeFood = () =>{
        Crumb.level++; 
    }

   const navList = [
       {
        img:'../assets/fish/fish.svg',
        value:100,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.babyFish,
        onClick(){
            createGoldFish()
        }
    },

    {
        img: qImg,
        value:200,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.foodQuality,
        onClick(){
            upgradeFood()
            setQimg(() => Crumb.getCrumbImage());
        }
        
        
        

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:100,
        labelVal:`${props.player[0].food + 1}`,
        item:levelParams.allowedUpgrades.foodqty,
        onClick(){
            increaseFoodLimit()
        },
    

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:200,
        item:levelParams.allowedUpgrades.carnivore,
        hasImgTag: true,
        onClick(){
            createCarnivore()
        },

    },

    {
        img:'../assets/gun/gunorange.svg',
        value:1000,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.laserUpgrade,
        onClick(){
            props.player[0].upgradeDamage();
        }

    },
    {
        img:'../assets/upgrades/egg.svg',
        value:750,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.levelupCost,
        onClick(){
            levelUp(levelParams.allowedUpgrades.levelupCost)
        }

    },

    

    ]


    

    const navigation = navList.map((ele,index) => <NavItem key={index} {...ele}/>)
    return (
        <div className={styles.navbar}>
            {navigation} 
            <div className={styles.navTwo}>
                <button className={styles.buttonTwo}>

                    <label className={styles.labelTwo}>Menu</label>
                </button>
                <label className={styles.labelThree}>$ {`${props.player[0].coins}`}</label>
            </div>
        </div>
    )
}

export default Navbar