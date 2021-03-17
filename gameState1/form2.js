class Form2 {
    constructor() {
        this.plr1 = createElement('h2');
        this.reset = createButton('Reset');
    }

    display(){
        this.plr1.html("player1 : " + player.name)
        this.plr1.position(100,100,30,30);

        this.reset.position(displayWidth-100,20);

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
          });
    }
}