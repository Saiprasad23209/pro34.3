var Dog,dogstand,dogsit

function preload(){
dogstand=loadImage("images/dogimg.png")
dogsit=loadImage("images/dogimg1.png")

}

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    //foodobj=new Food()
   foodStock = database.ref("Food");
   foodStock.on("value",readStock);
   Dog=createSprite(250,200,100,100);
  Dog.addImage()
}

function draw(){
    background("white");
    
if(keyDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(dogstand)
    }
    drawSprites();
}

function writeStock(x){
    if(x<=0){
        x=o;}
  else{
      x=x-1;
        }
        database.ref('/').update({
            Food:x
        })
    }

    function readStock(data){
        foodS=data.val();
    }

    function writeStock(x){

        database.ref('/').update({
            Food:x
        })

    }
