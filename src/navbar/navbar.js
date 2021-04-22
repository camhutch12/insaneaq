import { NavItem } from "../navbar/navItem";
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
const Navbar = (props) => {

    const guppyCost = 100;
    const foodUpgradeCost = 200;
    const foodQuantity = 1;
    const foodQuantCost = 100;
    const bigFishCost = 1000;
    const gunCost = 1000;
    const eggCost = 750;
    const money = 0;


   const navList = [{
        img:'../assets/fish/fish.svg',
        value:100,
        hasImgTag: true,
        createFish(){
            props.createFish(new GoldFish(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))
        }

    },

    {
        img:'../assets/drops/crumb.svg',
        value:200,
        hasImgTag: true

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:1,
        labelVal:100,
    

    },

    {
        img: '../assets/fish/bigfish/bigfish.svg',
        value:200,
        hasImgTag: true

    },

    {
        img:'../assets/gun/gunorange.svg',
        value:1000,
        hasImgTag: true,

    },
    {
        img:'../assets/upgrades/egg.svg',
        value:750,
        hasImgTag: true

    },

    

    ]

    const navigation = navList.map((ele,index) => <NavItem key={index} {...ele}/>)
    return (
        <div class={styles.navbar}>
            {navigation} 
            <div class={styles.navTwo}>
                <button class={styles.buttonTwo}>

                    <label class={styles.labelTwo}>Menu</label>
                </button>
                <label class={styles.labelThree}>${money}</label>
            </div>
        </div>
    )
}

export default Navbar