let player, skatewheels, obsstacle, enemy,floor;
let score = 0;
let sound1;
let gameover;
let goalPost;
let start;
let ganestate;
let hasGameBegun = false;
let speed = 5;
let myFont;
let bg
let state = 0;




function preload(){
  myFont = loadFont("Khand-SemiBold.ttf");
  sound1 = loadSound("Bridge Island Zone Act 1.mp3")
}

function setup() {
 bg = loadImage('bg2.png');
  new Canvas(600,400);
  
  world.gravity.y = 10;

player = new Sprite();
player.img = "skate.png";
player.width = 35;
player.height = 73;
player.x = 200;
player.y = 237;
player.mass=3;
player.rotationlock =true;
player.friction=0;

skatewheels = new Sprite()
skatewheels.collider = "static";
skatewheels.diameter = 20
skatewheels.img = "skatewheels.png";
skatewheels.x = 560;
skatewheels.y = 340;

floor = new Sprite(550,320,1000,40, 'static');


floor2 = new Sprite(1350,390,130,40, 'static');

floor3 = new Sprite(1550,290,130,40, 'static');
floor4 = new Sprite(1910,240,420,40, 'static');

floor5 = new Sprite(2250,360,250,40, 'static');


floor6 = new Sprite(2550,320,160,40, 'static');
floor7 = new Sprite(2750,290,220,40, 'static');

floor8 = new Sprite(3050,370,240,40, 'static');

floor9 = new Sprite(3370,390,360,40, 'static');

floor10 = new Sprite(3596,330,330,40, 'static');

floor11= new Sprite(3700,220,240,40, 'static');
floor12= new Sprite(3940,170,170,40, 'static');

floor13= new Sprite(4310,220,290,40, 'static');

floor13= new Sprite(5035,220,29,40, 'static');

floor13= new Sprite(4775,220,29,40, 'static');

goalPost = new Sprite(4900,280,'static')
goalPost.width = 290
} 


function draw() {
  text(skatewheels,400,30)
stateNum();
jump();

rect(0, 0, 50, 100);

  if (state == 0){
    playGame();
  } else if (state == 1){
    gameOver();
  } else if (state == 2){
    goal();
  }



}

function stateNum(){
  if (player.y >= height){ 
    state = 1;
  }
  if (player.collides(goalPost)){
    state = 2;
   } 
}

function screen(){
  if (stage == 0){
startGame();
  }
}
  
function playGame(){
  background(bg)
  player.vel.x = speed;
  camera.x = player.x;
  player.overlaps(skatewheels,collectSkatewheels)
  sound1.play()
}

function collectSkatewheels(player,skatewheels){
  skatewheels.remove();
	score++;
}

function gameOver(){
  // if (player.y >= height){
    background('black');
    fill(255);
    text("game over dude", width/2, height/2);
    textFont(myFont);
   
  //}
}

function goal(){
  //if (player.collides(goalPost)){
    
  background('green');
  fill(255);
  text("you win",width/2,height/2);
  textFont(myFont);
 // }
}


function jump(){
  if(keyIsDown(32)){
    player.img = "charge.png";
    player.vel.y = 35;
    player.rotationlock= true;
    console.log("jump");
  }

}    
