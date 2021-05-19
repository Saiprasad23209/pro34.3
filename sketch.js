var dogstand,dagsit, foodS, foodStock,Database;

function preload(){
dogstand=loadImage("images/dogImg.png")
dogsit=loadImage("images/dogImg1.png")

}

function setup(){
    createCanvas(500,500);
    Database=firebase.database()
    dog=createSprite(250,300,10,10)
    dog.addImage(dogstand)
    dog.scale=0.2
    foodStock=Database.ref("Food")
    foodStock.on("value",readstock)
    
}

function draw(){
    background("white");
   if(keyDown(UP_ARROW)){
writeStock(foodS)
   }
   textSize(25)
   text("Food Remaining :"+ foodS,150,200)
   text("Note:- Press up arrow to feed the dog",50,30)
    drawSprites();
}
function readstock(data){
    foodS=data.val()
}
function writeStock(x){
    if(x<=0){
        x=0;}
  else{
      x=x-1;
        }
        Database.ref('/').update({
            Food:x
        })
    }

