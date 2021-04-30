import { NavItem } from "../navbar/navItem";
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
import {Carnivore} from '../model/carnivore';
import UI from '../UI/ui'
import {randomNumber} from '../util/utilities'
const Navbar = ({levelParams,...props}) => {

  
    const money = 0;
    const increaseFoodLimit = () => {
        if(props.player[0].coins >= 200){
            props.player[0].food += 1;
            props.player[0].coins -= 200;
        }
    }

    const createFish=() =>{
        if(props.player[0].coins >= 100){
            
            props.createFish(new GoldFish(randomNumber(100,props.SCREEN_SIZE.x-200),randomNumber(100,props.SCREEN_SIZE.y-200)));
            props.player[0].coins -= 100;
        }
    }

    const createCarnivore=() =>{
        if(props.player[0].coins >= 1000){
        props.createCarnivore(new Carnivore(randomNumber(100,props.SCREEN_SIZE.x-200),randomNumber(100,props.SCREEN_SIZE.y-200)))
        props.player[0].coins -= 1000;
        }
    }

    const levelUp =(item) =>{
        if(props.player[0].coins >= item.price){
        props.isLevelup()
        }

    }

    const upgradeFood = () =>{
        console.log('upgrade food')
    }

   const navList = [{
        img:'../assets/fish/fish.svg',
        value:100,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.babyFish,
        onClick(){
            createFish()
        }
    },

    {
        img:'../assets/drops/crumb.svg',
        value:200,
        hasImgTag: true,
        item:levelParams.allowedUpgrades.foodQuality,
        onClick(){
            upgradeFood()
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