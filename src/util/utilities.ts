/* checks the coordinates around a sprite/ object simulating if a collision has occured */
export const isboundingBoxCoords = (p1:{x:number,y:number}, p2:{x:number,y:number}, offset:number) => {
    return (
      p1.x < p2.x + offset &&
      p1.x > p2.x - offset &&
      p1.y > p2.y + offset &&
      p1.y > p2.y - offset
    );
  };

  /* Creates a random number between a range  */
  export let randomNumber = (min:number,max:number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  // Used for chaning constants faster though out the program
  export let CONSTANTS = {
    MINX: 110,
    MAXX: window.innerWidth-110,
    MINY: 110,
    MAXY: window.innerHeight -110,
  }


  