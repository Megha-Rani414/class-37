class Player{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;



    }
    static getPlayerInfo(){
        var getplayerInfos = database.ref('Players');
        getplayerInfos.on("value" , (data)=>{
            PlayersInfo = data.val();
        });

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value" , function(data){
            PlayerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount:count
        })
    }

    update() {
        var playerSpace = "Players/player" + this.index;
            database.ref(playerSpace).set({
                name:this.name,
                distance:this.distance
        })
    }
}