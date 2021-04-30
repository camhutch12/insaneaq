export const isboundingBoxCoords = (p1:{x:number,y:number}, p2:{x:number,y:number}, offset:number) => {
    return (
      p1.x < p2.x + offset &&
      p1.x > p2.x - offset &&
      p1.y > p2.y + offset &&
      p1.y > p2.y - offset
    );
  };

  export let randomNumber = (min:number,max:number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  export let CONSTANTS = {
    MINX: 200,
    MAXX: window.innerWidth-200,
    MINY: 200,
    MAXY: window.innerHeight -200,
  }