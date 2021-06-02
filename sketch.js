var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload(){
  ig=loadImage("Imgs/yoda1.png");
  igw=loadImage("Imgs/fighter1.png");
  bgs=loadSound("Imgs/bgs.mp3");
  bg=loadImage("Imgs/bg1.png");
  qb=loadImage("Imgs/bg.png");
}
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  //creating Sprites
  var sd = createSprite(760,300)
  sd.addImage(ig);
  sd.scale=0.65;

  var ab = createSprite(760,100)
  ab.addImage(igw);
  ab.scale=0.5;

  var ac =  createSprite(500,330)
  ac.addImage(bg);
  ac.scale=0.8;

  var ad =  createSprite(50,330)
  ad.addImage(qb);
  ad.scale=1.9;

  bgs.loop();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("white");
  drawSprites();
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    
    quiz.play();
  }
}
