
var objects=new Array();



function makeRectangle(id,x,y,width,height,canMove,color,lineCol,lineWidth,rot){
  console.log('hi2')
  canMove = typeof canMove !== 'undefined' ? canMove : false;
  color = typeof color !== 'undefined' ? color : '#000000';
  lineCol = typeof lineCol !== 'undefined' ? lineCol : '#000000';
  lineWidth = typeof lineWidth !== 'undefined' ? lineWidth : 0;
  rot = typeof rot !== 'undefined' ? rot : 0;

  
  rectangle=new Object();
  rectangle.id=id;
  rectangle.x=x;
  rectangle.y=y;
  rectangle.width=width;
  rectangle.height=height;
  rectangle.color=color;
  rectangle.rot=rot;
  rectangle.canMove=canMove
  rectangle.type='rectangle';
  objects.push(rectangle)
  return rectangle;
}

function makeCircle(id,x,y,radius,canMove,lineWidth,color,lineCol,arc1,arc2){
  lineWidth = typeof lineWidth !== 'undefined' ? lineWidth : 0;
  lineCol = typeof lineCol !== 'undefined' ? lineCol : '#000000';
  color = typeof color !== 'undefined' ? color : '#000000';
  arc1 = typeof arc1 !== 'undefined' ? arc1 : 0;
  arc2 = typeof arc2 !== 'undefined' ? arc2 : Math.PI*2;
  canMove = typeof canMove !== 'undefined' ? canMove : false;

  circle=new Object();
  circle.id=id;
  circle.x=x;
  circle.y=y;
  circle.radius=radius;
 circle.color=color;
  circle.lineCol=lineCol;
  circle.lineWidth=lineWidth;
  circle.arc1=arc1;
  circle.arc2=arc2;
  circle.canMove=canMove;
  circle.type='circle';
  objects.push(circle)
  return circle;
}

function overlapRectangle(x,y,rectangle){
 x2=x-rectangle.x;
 y2=y-rectangle.y;
 
 xBound=(x>=rectangle.x-rectangle.width/2 & x<=rectangle.x+rectangle.width/2) | (x<=rectangle.x-rectangle.width/2 & x>=rectangle.x+rectangle.width/2);
 yBound=(y>=rectangle.y-rectangle.height/2 & y<=rectangle.y+rectangle.height/2) | (y<=rectangle.y-rectangle.height/2 & y>=rectangle.y+rectangle.height/2)
 if(xBound & yBound){
     return true;
 }else{
     return false;

     
 }
}

function drawRectangle(ctx,rectangle){  
  ctx.fillStyle=rectangle.color;
  ctx.translate(rectangle.x, rectangle.y);
  ctx.rotate(rectangle.rot*Math.PI/180);
  ctx.translate(-rectangle.x, -rectangle.y);
  ctx.fillRect(rectangle.x-rectangle.width/2,rectangle.y-rectangle.height/2,rectangle.width,rectangle.height);

 
  ctx.translate(rectangle.x, rectangle.y);
  ctx.rotate(-rectangle.rot*Math.PI/180);
  ctx.translate(-rectangle.x, -rectangle.y);
}


function makeCrosshair(){
 // Draw rectangles
  for(i=0;i<12;i++){
    makeRectangle('cross1',centerX,centerY,2,10,false,'#000000','#000000');
    makeRectangle('cross2',centerX,centerY,10,2,false,'#000000','#000000');
    }
}

function drawObjects(ctx,objects){
  for(i=0;i<objects.length;i++){
      if(objects[i].type=='circle'){
          drawCircle(ctx,objects[i])
      }else if(objects[i].type=='rectangle'){
          drawRectangle(ctx,objects[i])
      }else if(objects[i].type=='triangle'){
          drawTriangle(ctx,objects[i])
      }else if(objects[i].type=='line'){
          drawLine(ctx,objects[i])
      }else if(objects[i].type=='image'){
          drawIm(ctx,objects[i])
      }else if(objects[i].type=='text'){
          drawText(ctx,objects[i])
      }        
      
  }
  
}


function makeCircle(id,x,y,radius,canMove,lineWidth,color,lineCol,arc1,arc2){
  lineWidth = typeof lineWidth !== 'undefined' ? lineWidth : 0;
  lineCol = typeof lineCol !== 'undefined' ? lineCol : '#000000';
  color = typeof color !== 'undefined' ? color : '#000000';
  arc1 = typeof arc1 !== 'undefined' ? arc1 : 0;
  arc2 = typeof arc2 !== 'undefined' ? arc2 : Math.PI*2;
  canMove = typeof canMove !== 'undefined' ? canMove : false;

  circle=new Object();
  circle.id=id;
  circle.x=x;
  circle.y=y;
  circle.radius=radius;
 circle.color=color;
  circle.lineCol=lineCol;
  circle.lineWidth=lineWidth;
  circle.arc1=arc1;
  circle.arc2=arc2;
  circle.canMove=canMove;
  circle.type='circle';
  objects.push(circle)
  return circle;
}

function drawCircle(ctx,circle){
// Draw circle outline
ctx.beginPath();
   ctx.arc(circle.x, circle.y, circle.radius+circle.lineWidth, circle.arc1, circle.arc2, false);
   ctx.lineTo(circle.x,circle.y);
   ctx.fillStyle = circle.lineCol;
   ctx.fill();
   ctx.lineWidth = circle.lineWidth;

// Draw circle fill
   ctx.strokeStyle=circle.color;
   ctx.fillStyle=circle.color;
   ctx.beginPath();
   ctx.arc(circle.x, circle.y, circle.radius, circle.arc1, circle.arc2, false);
   ctx.lineTo(circle.x,circle.y);
   ctx.fillStyle = circle.color;
   ctx.fill();
   ctx.lineWidth = 0;
   ctx.stroke();
   ctx.closePath();
  return circle;
  }



function erase(ctx){
  width=ctx.canvas.width;
  height=ctx.canvas.height;
  ctx.fillStyle='#FFFFFF';
  ctx.fillRect(0,0,width,height);
}


function generateRandom(minNumber, maxNumber){
  //generating a random decimal from 0 to 1
  let randomDecimal = Math.random();
  let range = maxNumber - minNumber;
  let scaleUp = Math.round(randomDecimal*range)
  let finalNumber = minNumber + scaleUp

  return finalNumber
}


function drawRandomCircle(randomCircleX, randomCircleY, randomCircleRadius){
  ctx.beginPath();
  ctx.arc(randomCircleX, randomCircleY, randomCircleRadius, 0, 2*Math.PI);
  ctx.fillStyle = '#000000';
  ctx.fill();  
}

// function makeRandomCircle(id,x3,y3, radius) {
//   let x3 = generateRandom(0,600)
//   let y3 = generateRandom(0,400)
//   let radius = generateRandom(0,50)
//   // randomCircle=new Object();
//   // randomCircle.id=id;
//   // randomCircle.x3=x3;
//   // randomCircle.y3=y3;
//   // randomCircle.radius3=radius3;

//   return randomCircle
// }

function generateRandomCircle() {
  let randomCircleX = generateRandom(0,600);
  let randomCircleY = generateRandom(0,400);
  let randomCircleRadius = generateRandom(0,50);

  drawRandomCircle(randomCircleX,randomCircleY,randomCircleRadius);


}

function erase(ctx){
  width=ctx.canvas.width;
  height=ctx.canvas.height;
  ctx.fillStyle='#FFFFFF';
  ctx.fillRect(0,0,width,height);
}

function multipleRandomCircle(){
  setInterval(function(){
    generateRandomCircle();
  }, 500)
}


function randomLocation(){

}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//generate array without repeat
      var alreadyDone = [];
      // Function picking random values from array
      const randomValueFromArray = (myArray) => {
      // If alreadyDone is empty then fill it will indexes equal
      // to the size of myArray
      if (alreadyDone.length === 0) {
          for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
      }
      // Generate random number within the range of 
      // length of alreadyDone array
      var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);

      // Getting unaccessed index of myArray using above 
      // random number
      var indexOfItemInMyArray = alreadyDone[randomValueIndex];
      // remove this index from alreadyDone array because
      // we are accessing it now.
      alreadyDone.splice(randomValueIndex, 1);
      // Get the value
      return myArray[indexOfItemInMyArray];
      };
///


function makeCrosshair(){
  console.log('hi')
  // Draw rectangles
   for(i=0;i<12;i++){
     makeRectangle('cross1',50,50,2,10,false,'#000000','#000000');
     makeRectangle('cross2',50,50,10,2,false,'#000000','#000000');
     }
 }

