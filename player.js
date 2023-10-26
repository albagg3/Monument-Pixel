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

    // shoot(){
    //     if(this.stars > 0)
    //     {
    //         console.log("shoot");
    //         this.stars--;
    //         document.querySelector(".reward-accum").remove();
    //         console.log("bala",this.bullets[0])

    //         this.bullets[0].bulletElement.classList.remove("hidden")
    //         console.log("bulletX: ",this.bullets[0].positionX , "board: ", this.gameBoard.clientWidth)
    //         if(this.bullets[0].positionX < this.gameBoard.clientWidth)
    //         {
    //             this.bullets[0].positionX += this.bullets[0].bulletSpeed;
    //         }
    //         this.bullets[0].bulletElement.style.right = `${this.bullets[0].positionX}px`;
    //     }
    // }
    
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
                    //handle stars
                    obstacle.element.classList.add("hidden")
                    this.stars++;
                    console.log(this.stars)
                    const starElem =  document.createElement("div");
                    starElem.classList.add("reward-accum")
                    this.starsContainer.append(starElem);

                    //handle bullets
                    // const bulletElem =  document.createElement("div");
                    // const bullet = new Bullet(bulletElem)
                    // console.log(bullet.bulletElement);
                    // bullet.bulletElement.classList.add("bullet")
                    // bullet.bulletElement.classList.add("hidden")
                    // this.gameBoard.append(bullet.bulletElement);
                    // this.bullets.push(bullet);
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
