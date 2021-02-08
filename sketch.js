//global variable
var backround
var b
var e1g,e2g,e3g,lg

function preload(){
b=loadImage("space10.png")
E=loadImage("enemy20.png")
F=loadImage("enemy40.png")
A=loadImage("enemy30.png")
P=loadImage("enemy10.png")
}

function setup(){
createCanvas(displayWidth,displayHeight-100);  
  backround=createSprite(200,200,400,400) 
  backround.addImage("B",b)
  backround.velocityY = 4;
  
  
  
  player=createSprite(200,360,10,10)
  player.addImage("p",P)
  
  
  e1g=new Group()
  e2g=new Group()
  e3g=new Group()
  lg=new Group()

}
function draw(){
background ("white");
  
  player.x=mouseX
  

var enterenemy = Math.round(random(1,3))
 if(frameCount%100===0){
  if(enterenemy===1){
  E1()   
}  
else if(enterenemy===2){
  E2()
}    
  else{
    E3()
  }  
 
 } 
 if(backround.y>1200){
    backround.y = backround.height/2
    } 
backround.scale = 3
 
  
  
  if(keyDown("space")){
    laser()
  }
  
  
  
  if(lg.isTouching(e1g)){
    lg.destroyEach()
    e1g.destroyEach()
  }
  
   if(lg.isTouching(e2g)){
    lg.destroyEach()
    e2g.destroyEach()
  }
  
  
   if(lg.isTouching(e3g)){
    lg.destroyEach()
    e3g.destroyEach()
  }
  
drawSprites();
}
function E1(){
 
if(frameCount%100===0){
var E1 = createSprite(random(50,350),0,10,10) 
  E1.velocityY = 5;  
  E1.addImage("e",E)
  e1g.add(E1)
}
}
function E2(){
 
if(frameCount%100===0){
var E2 = createSprite(random(100,380),0,10,10) 
  E2.velocityY = 5;  
  E2.addImage("e",F)
  e2g.add(E2)
}
}
function E3(){
 
if(frameCount%100===0){
var E3 = createSprite(random(50,350),0,10,10) 
  E3.velocityY = 5;  
  E3.addImage("e",A)
e2g.add(E3)
}
}




function laser(){
  var laser=createSprite(player.x,360,3,10)
  laser.velocityY=-4
  laser.shapeColor="red"
  lg.add(laser)
}












