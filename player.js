console.log("player.js is working");

class Player
{
    constructor(){
        this.y = 50;
        this.x = 40;
        this.speed = 100;
        this.gravity = 3;
        this.isJumping = false;
        this.playerElement = document.querySelector("#player")
        this.gameBoard = document.querySelector("#game-board")
        this.gameOver = false;
    }
    jump()
    {
        if(!this.isJumping)
        {
            this.isJumping = true;
            this.y += this.speed;
        }
    }
    addGravity()
    {
        if(this.y > 50)
            this.y -= this.gravity;
        if(this.y <= 50)
            this.y = 50;
        this.playerElement.style.bottom = `${newPlayer.y}px`
    }
    checkCollision(obstacle)
    {
        console.log("obstacle",obstacle.position);
        console.log("player",this.x);
        if(this.gameBoard.clientWidth - this.x - this.playerElement.clientWidth <= obstacle.position)
        {
            console.log("GameOver")
            this.gameOver = true;
        }
            
    }

}