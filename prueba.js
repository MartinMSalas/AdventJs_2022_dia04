console.log("m")
/*


anta Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples:

fitsInOneBox(boxes) // false
In the previous example, the smallest box fits into the middle box, but the middle box does not fit into the largest box. Therefore, it is not possible to pack all the boxes in one.

In the previous example, the smallest box fits into the largest box. Therefore, it is possible to pack all the boxes in one. Now let's see a case that does not:

Note that the boxes may not come in order:
In the previous example, the first box fits into the third, and the third into the second. Therefore, it is possible to pack all the boxes in one.
*/



const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]
/*

*/

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

const boxes3 = [
{ l: 1, w: 1, h: 10 },
{ l: 3, w: 3, h: 12 },
{ l: 2, w: 2, h: 1 },
]

const boxes4 = [


  { l: 1, w: 1, h: 1 },
          { l: 2, w: 2, h: 2 },
          { l: 2, w: 10, h: 2}
]
const boxes5 =[
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2}


]

function fitsInOneBox(boxes) {
  function compareBoxes(box1,box2){
    console.log(box1);
    console.log(box2);
    if (box1.l==box2.l || box1.w==box2.w || box1.h==box2.h){
      console.log("entro al if de la igualdad")
      return true;
    }
    if(box1.l<box2.l){
      if(box1.w>box2.w || box1.h>box2.h){
        console.log("entro al if de la irrascionalidad")
        return true;
      }
    }
    return false;

  }
  for (let index = 0; index < boxes.length-1; index++) {   
    for (let jindex = index; jindex < boxes.length-1; jindex++) {
      //console.log(compareBoxes(boxes[index],boxes[jindex+1]));
      if(compareBoxes(boxes[index],boxes[jindex+1])){
        return false;
      }
    
    } 
  }
  return true;
}

//console.log(fitsInOneBox(boxes2)) // true

function fitsInOneBox2(boxes) {
  
    function compareBoxes(box1,box2){    
      console.log(box1,box2);
      if (box1.l==box2.l || box1.w==box2.w || box1.h==box2.h)      
        return false;    
      if(box1.l<box2.l){
        if(box1.w>box2.w || box1.h>box2.h)       
          return false;
      }
      return true;
    }
    for (let index = 0; index < boxes.length-1; index++) {   
      for (let jindex = index; jindex < boxes.length-1; jindex++) {
        console.log(compareBoxes(boxes[index],boxes[jindex+1]))
        return(compareBoxes(boxes[index],boxes[jindex+1])) 
      } 
    }
    return true;
  
}

console.log(fitsInOneBox2(boxes5));
/*

*/