var canvas, backgroundImg;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var form2;

function preload(){
  backgroundImg = loadImage("images/background.jpg");
  boardImg = loadImage("images/board.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    var board = createSprite(displayWidth/2,displayHeight/2-50,1,1);
    board.addImage(boardImg);
    board.scale=0.7;
    form2 = new Form2();
  }
  drawSprites()
}