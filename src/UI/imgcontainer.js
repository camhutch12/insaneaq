
import classes from './charselection.module.css'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/


/* React component which is used to render the images of each sprite to the screen for the user to select */
const ImgContainer= (props) => {

    let style = ""; // used as a defualt value for custom css


  /* Based on the ID passed in changes the css for sprite */
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
          break;
      }


return (

  
    <img className={style} id={props.id} onClick={props.onclick} src={props.element.imgPath} ></img>
  )

}

export default ImgContainer
