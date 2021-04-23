import { NavItem } from "../navbar/navItem";
import styles from '../style.module.css';
import {GoldFish} from '../model/Goldfish';
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
                <label class={styles.labelThree}>$ {`${props.player[0].coins}`}</label>
            </div>
        </div>
    )
}

export default Navbar