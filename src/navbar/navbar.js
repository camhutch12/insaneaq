import { NavItem } from "../navbar/navItem";
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
import {Carnivore} from '../model/carnivore';
import UI from '../UI/ui'
const Navbar = (props) => {

  
    const money = 0;
    const increaseFoodLimit = () => {
        if(props.player[0].coins >= 200){
            props.player[0].food += 1;
            props.player[0].coins -= 200;
        }
    }

    const createFish=() =>{
        if(props.player[0].coins >= 100){
        props.createFish(new GoldFish(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))
        props.player[0].coins -= 100;
        }
    }

    const createCarnivore=() =>{
        if(props.player[0].coins >= 1000){
        props.createCarnivore(new Carnivore(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))
        props.player[0].coins -= 1000;
        }
    }

    const levelUp =() =>{
        
        props.isLevelup()
    }

    const upgradeFood = () =>{
        console.log('upgrade food')
    }

   const navList = [{
        img:'../assets/fish/fish.svg',
        value:100,
        hasImgTag: true,
        onClick(){
            createFish()
        }
    },

    {
        img:'../assets/drops/crumb.svg',
        value:200,
        hasImgTag: true,
        onClick(){
            upgradeFood()
        }
        
        
        

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:100,
        labelVal:`${props.player[0].food + 1}`,
        onClick(){
            increaseFoodLimit()
        },
    

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:200,
        hasImgTag: true,
        onClick(){
            createCarnivore()
        },

    },

    {
        img:'../assets/gun/gunorange.svg',
        value:1000,
        hasImgTag: true,

    },
    {
        img:'../assets/upgrades/egg.svg',
        value:750,
        hasImgTag: true,
        onClick(){
            levelUp()
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