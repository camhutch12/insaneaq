import { NavItem } from "./navItem";
import {useEffect,useState} from 'react'
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
import {Carnivore} from '../model/carnivore';
import {randomNumber,CONSTANTS} from '../util/utilities'
import {Crumb} from '../model/crumb'

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/* Creates a navigation component on the top of the screen */
const Navbar = ({levelParams,...props}) => {

    let [qImg,setQimg] = useState(() => Crumb.getCrumbImage()) // used to create a rerender and to also get which image of the crumb based on the value
    let [foodQty,setFoodQty] = useState(() => 1); // used to create a rerender when the user upgrade the quantity of food
    let [isPaused,setIsPaused] = useState(false) // used by the pause button function to cause a rerender to make sure that certain components to render


    /* This function is used by the gun component and renders a image 
    depending on the value of the players damage */
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
    /* Used when the pause button is called */
    const pauseGame = () => {
if(isPaused === false){

    props.player[0].pauseGame(props.player[0].pause)
  setIsPaused(true)
}else{
    props.player[0].pauseGame(props.player[0].pause)
    setIsPaused(false)
}
        
    }
    
    

let [blasterImg,setBlasterImg] = useState(() => image()) // creates a rerender when the person upgrades there gun



/* used for creating rerenders of different components based on changes that have occured
there componets are [qImg,foodQty,blasterImg,isPaused] */ 

  useEffect(() => {
     
    setQimg(Crumb.getCrumbImage())
   
      return () => {
          setQimg(Crumb.getCrumbImage())
      }
  },[qImg,foodQty,blasterImg,isPaused])


  /* When a user clicks on creates food 
  increase the amount of food that a player can deploy and reduce the players money by 200*/
    const increaseFoodLimit = () => {
        if(props.player[0].coins >= 200){
            props.player[0].food += 1;
            props.player[0].coins -= 200;
            setFoodQty(props.player[0].food);
        }
    }
    /* If the player has 100 coins create a new Goldfish at a random location  */
    const createGoldFish= () =>{
        if(props.player[0].coins >= 100){
            
            props.createFish(new GoldFish(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)));
            props.player[0].coins -= 100;
        }
    }
    /* If the player has 1000 coins create a new Carnivore at a random location  */
    const createCarnivore=() =>{
        if(props.player[0].coins >= 1000){
        props.createCarnivore(new Carnivore(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)))
        props.player[0].coins -= 1000;
        }
    }
    /* If the user has enough coins to increase the level of the user. this ends the level and the UI with level completed appears 
     */
    const levelUp =(item) =>{
        if(props.player[0].coins >= item.price){
        props.isLevelup()
        }

    }
    /* Upgrades the food if the player has the enough coins */
    const upgradeFood = (item) =>{
        if(props.player[0].coins >= item.price ){
        Crumb.level++; 
        props.player[0].coins -= item.price
        }
    }
/* Array of objects where each object is passed into the component being a navitem 
OnClick is a eventListner that is called when the item is clicked.  */
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