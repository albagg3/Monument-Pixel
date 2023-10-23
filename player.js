console.log("player.js is working");

class Player
{
    constructor(){
        this.positionY = 0;
        this.speed = 100;
        this.gravity = 3;
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
        if(this.positionY > 0 )
            this.positionY -= this.gravity;
        if(this.positionY <= 0)
            this.positionY = 0;
        this.playerElement.style.bottom = `${newPlayer.positionY}px`
    }

}