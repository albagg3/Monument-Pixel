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
        this.starsContainer = document.querySelector(".stars-container")
        // this.bullets = [];
        this.stars = 0;
        this.starWin = new Audio("./music/star.wav")
        
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
        this.playerElement.style.bottom = `${this.y}px`
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
            if (obstacle.type === "reward")
            {
                if(this.stars < 5)
                {
                    this.starWin.play()
                    //handle stars
                    obstacle.element.classList.add("hidden")
                    this.stars++;
                    console.log(this.stars)
                    const starElem =  document.createElement("div");
                    starElem.classList.add("reward-accum")
                    this.starsContainer.append(starElem);

                }
                else
                {
                    return ;
                }
            }
            else
            {
                console.log("GameOver3")
                this.gameOver = true;
            }
        }
    }
}
