import classes from './charselection.module.css'

const ImgContainer= (props) => {
    let img = "";
    let style = "";
    let name = ""
    switch (props.id) {
        
        case 'snail':
          style = classes.snail;
          break;
        case 'clam':
          style = classes.shell;
     
          break;
        case 'swordfish':
          style = classes.swordfish;

          break;
        case 'prego':
          style = classes.prego;
          break;
          case 'seahorse': 
          style = classes.seahorse;
          break;
        default:
          img = "../assets/background/snail.svg";
          break;
      }
    return (
       
        // <div className={classes.img__container} >
        <img  id={props.id} onClick={props.onclick} src={props.element.imgPath} className={style}></img>
        // { </div> }
    )
}

export default ImgContainer
