class form{
    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h1');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("Need For Speed");
        title.position(width/2+200,50);
        this.input.position(width/2+200,200);
        this.button.position(width/2+250,300);    

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            players.name = this.input.value(); 
            PlayerCount++;
            players.index = PlayerCount;
            players.update();
            players.updateCount(PlayerCount);
            this.greeting.html("Welcome " + players.name);
            this.greeting.position(400,250); 
        })    
    }    
}

    

