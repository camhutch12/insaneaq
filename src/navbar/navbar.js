import { NavItem } from "./navItem";
import {useEffect,useState} from 'react'
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
import {Carnivore} from '../model/carnivore';
import {randomNumber,CONSTANTS} from '../util/utilities'
import {Crumb} from '../model/crumb'
const Navbar = ({levelParams,...props}) => {
    let image = () =>{
       
        switch(props.player[0].damage){
            case 1:
                return '../../assets/gun/gunred.svg'
                
            case 2:
                return '../../assets/gun/gunorange.svg'
                
            case 4:
                return '../../assets/gun/gunblack.svg'
                
            default: 
                return '../../assets/gun/gunblack.svg'
        }
    }

    const pauseGame = () => {
if(isPaused === false){

    props.player[0].pauseGame(props.player[0].pause)
  setIsPaused(true)
}else{
    props.player[0].pauseGame(props.player[0].pause)
    setIsPaused(false)
}
        
    }
    
    let [qImg,setQimg] = useState(() => Crumb.getCrumbImage())
let [foodQty,setFoodQty] = useState(() => 1);
let [blasterImg,setBlasterImg] = useState(() => image())
let [isPaused,setIsPaused] = useState(false)




  useEffect(() => {
     
    setQimg(Crumb.getCrumbImage())
   
      return () => {
          setQimg(Crumb.getCrumbImage())
      }
  },[qImg,foodQty,blasterImg,isPaused])
    const money = 0;
    const increaseFoodLimit = () => {
        if(props.player[0].coins >= 200){
            props.player[0].food += 1;
            props.player[0].coins -= 200;
            setFoodQty(props.player[0].food);
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

    const upgradeFood = (item) =>{
        if(props.player[0].coins >= item.price ){
        Crumb.level++; 
        props.player[0].coins -= item.price
        }
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
            upgradeFood(levelParams.allowedUpgrades.foodQuality)
            setQimg(() => Crumb.getCrumbImage());
        }
        
        
        

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:200,
        labelVal:`${props.player[0].food}`,
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
        img: blasterImg,
        value:1000,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.laserUpgrade,
        onClick(){
            if(props.player[0].coins >= levelParams.allowedUpgrades.laserUpgrade.price){
                props.player[0].coins -= levelParams.allowedUpgrades.laserUpgrade.price;
            props.player[0].upgradeDamage();
            setBlasterImg(() => image())
            }
            
            
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
            <div className={styles.navbar1}>
                
            { props.player[0].pause ? null : navigation } 
            </div>
            <div className={styles.navTwo}>
                <button className={styles.buttonTwo} onClick={pauseGame}>
                
                    {props.player[0].pause? <label className={styles.labelTwo} >Play</label>:<label className={styles.labelTwo} >Pause</label>}

                </button>
                <label className={styles.labelThree}>$ {`${props.player[0].coins}`}</label>
            </div>
        </div>
    )
}

export default Navbar