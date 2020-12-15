class gameObject{
    constructor()
    {
        //constructor//
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            GameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
           'gameState': state
        })
    }
 async start(){
    if(GameState === 0){
        players = new Player();
        var playerRef = await database.ref('playerCount').once("value");
        if(playerRef.exists()){
            PlayerCount = playerRef.val();
            players.getCount();
        }
        Form1  = new form();
        Form1.display();
    }
 }
 play(){
    Form1.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(PlayersInfo !== undefined){
      var displayPositions = 130;
      for(var plr in PlayersInfo){
        if (plr === "player" + players.index)
          fill("red")
        //   console.log("Red")   
        else
          fill("black");
          console.log("Red")  
        displayPositions+=20;
        textSize(15);
        text(PlayersInfo[plr].name + ": " + PlayersInfo[plr].distance, 120,displayPositions)
      }
    }

    if(keyIsDown(UP_ARROW) && players.index !== null){
      players.distance +=50
      players.update();
    }
  }
}

   // check hte brakets
//did you find any error...the output is correct only the color is not coming