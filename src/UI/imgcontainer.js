import classes from './charselection.module.css'

const ImgContainer= (props) => {
    let img = "";
    let style = "";
    let styleContainer = ""
    let name = ""
    switch (props.id) {
        
        case 'snail':
          style = classes.snail;
          styleContainer = classes.snail__container;

          break;
        case 'clam':
          style = classes.shell;
          styleContainer = classes.shell__container;

     
          break;
        case 'swordfish':
          style = classes.swordfish;
          styleContainer = classes.swordfish__container;


          break;
        case 'prego':
          style = classes.prego;
          styleContainer = classes.prego__container;

          break;
          case 'seahorse': 
          style = classes.seahorse;
          styleContainer = classes.seahorse__container;

          break;
        default:
          img = "../assets/background/snail.svg";
          break;
      }
    return (
        <div className={classes.pet__container}>
          <div className={styleContainer}>
          <img className={style} id={props.id} onClick={props.onclick} src={props.element.imgPath} ></img>
          </div>
          {props.ch === true ? <div className={classes.p_container}>
          <p id={props.id}>{props.element.label}</p>
          </div>:null}
        </div>
    )
}

export default ImgContainer
