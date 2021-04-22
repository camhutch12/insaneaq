const Navbar = () => {
    
    const guppyCost = 100;
    const foodQuantity = 1;
    const foodQuantCost = 100;
    const foodUpgradeCost = 200;
    const bigFishCost = 1000;
    const gunCost = 1000;
    const eggCost = 750;
    const money = 0;
    return (
        <div class={styles.navbar}>
                    <button class={styles.button}>
                        <img src="../assets/Fish/fish.svg" width="60"></img>
                        <label class={styles.label}>${guppyCost}</label>
                    </button> 
                
                    <button class={styles.button}>
                        <img src="../assets/drops/crumb.svg" width="60"></img>
                        <label class={styles.label}>${foodUpgradeCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <label class={styles.labelNumber}>{foodQuantity}</label>
                        <label class={styles.label}>${foodQuantCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <img src="../assets/Fish/bigfish/bigfish.svg" width="60"></img>
                        <label class={styles.label}>${bigFishCost}</label>
                    </button> 
                    
                    <button class={styles.button}>
                        <img src="../assets/gun/gunorange.svg" width="60"></img>
                        <label class={styles.label}>${gunCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <img src="../assets/upgrades/egg.svg" width="60"></img>
                        <label class={styles.label}>${eggCost}</label>
                    </button> 

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