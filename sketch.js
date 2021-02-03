var cat,
    catimg,
    catFk;

var mouse,
    mouseimg,
    mouseFk;

var gardenimg;

function preload() {
             
    gardenimg = loadImage("garden.png");

    catFk = loadAnimation("cat2.png", "cat3.png");

    mouseFk = loadImage("mouse3.png");

    catimg = loadImage("cat1.png");

    mouseimg = loadImage("mouse4.png");
                //load the images here

}

function setup(){
   
                 createCanvas(1000,800);
    
     background = createSprite(300,400,1000,1000);
     background.addImage(gardenimg);
     background.scale = 1.2
    
    cat = createSprite(750,700,50,20);

   mouse = createSprite(100,700,50,20);
    //create tom and jerry sprites here

}

function draw() {

    cat.addImage(catimg);
    cat.scale = 0.15;
    
    mouse.addImage(mouseimg);
    mouse.scale = 0.1;
    
    //Write condition here to evalute if tom and jerry collide

    if(keyCode === LEFT_ARROW){

        cat.velocityX = -5;
    
        cat.addAnimation("cat2", catFk);
         cat.changeAnimation("cat2");
    
    }

    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 
        && mouse.x  - cat.x < mouse.width/2 + cat.width/2){

                cat.changeAnimation("cat1.png", catimg);
                cat.changeAnimation("cat1.png");

                cat.velocityX = 0;

                mouse.changeAnimation("mouse4.png", mouseimg);
                mouse.changeAnimation("mouse4.png");

    }


    drawSprites();
}



        








