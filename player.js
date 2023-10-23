console.log("player.js is working");

class Player
{
    constructor(){
        this.positionY = 50;
        this.speed = 100;
        this.gravity = 5;
        this.isJumping = false;
        this.playerElement = document.querySelector("#player")
        this.gameBoard = document.querySelector("#game-board")
    }
    jump()
    {
        if(!this.isJumping)
        {
            this.isJumping = true;
            this.positionY += this.speed;
        }
    }
    addGravity()
    {
        if(this.positionY > 50)
            this.positionY -= this.gravity;
        if(this.positionY <= 50)
            this.positionY = 50;
        this.playerElement.style.bottom = `${newPlayer.positionY}px`
    }

}