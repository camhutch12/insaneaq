export const isboundingBoxCoords = (p1:{x:number,y:number}, p2:{x:number,y:number}, offset:number) => {
    return (
      p1.x < p2.x + offset &&
      p1.x > p2.x - offset &&
      p1.y > p2.y + offset &&
      p1.y > p2.y - offset
    );
  };