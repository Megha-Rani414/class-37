var database;
var GameState = 0;
var PlayerCount;
var Form1;
var players;
var PlayersInfo;
var game;
var distance=0;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new gameObject();
    game.getState();
    game.start();
  
}

function draw(){
    if(PlayerCount === 4){
        game.update(1);
    }
    if(GameState === 1){
        clear();
        game.play();
    }
}