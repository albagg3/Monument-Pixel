console.log("player.js is working");

class Player
{
    constructor(){
        this.y = 50;
        this.x = 40;
        this.speed = 150;
        this.gravity = 3;
        this.isJumping = false;
        this.playerElement = document.querySelector("#player")
        this.gameBoard = document.querySelector("#game-board")
        this.gameOver = false;
    }
    jump()
    {
        if(!this.isJumping && !this.gameOver)
        {
            this.isJumping = true;
            this.y += this.speed;
        }
    }
    down()
    {
        if(!this.gameOver)
        {
            this.playerElement.classList.remove("stand-player");
            this.playerElement.classList.add("bend-player");
        }
    }
    up()
    {
        if(!this.gameOver)
        {
            this.playerElement.classList.add("stand-player");
            this.playerElement.classList.remove("bend-player");
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
        const playerPosition = this.playerElement.getBoundingClientRect();
        const obstaclePosition = obstacle.element.getBoundingClientRect();
        if (playerPosition.x < obstaclePosition.x + obstaclePosition.width &&
            playerPosition.x + playerPosition.width > obstaclePosition.x &&
            playerPosition.y < obstaclePosition.y + obstaclePosition.height &&
            playerPosition.y + playerPosition.height > obstaclePosition.y)
        {
            console.log("GameOver3")
            this.gameOver = true;
        }
        // if((this.gameBoard.clientWidth - this.x - this.playerElement.clientWidth <= obstacle.posX
        //     && this.y <= obstacle.element.clientHeight + 50 && obstacle.type === "obs-down")
        //     )
        // {
        //     console.log("GameOver")
        //     this.gameOver = true;
        // }
        // else if(this.gameBoard.clientWidth - this.x - this.playerElement.clientWidth <= obstacle.posX 
        //     && obstacle.posY <= this.playerElement.clientHeight + 50 && obstacle.type === "obs-top"
        //     &&)
        // {
        //     console.log("Game over dos")
        //     this.gameOver = true;
        // }
        // if()
    }
}