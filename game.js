console.log("gameBoard.js is working")

class Game
{
    constructor(){
        this.score = 0;
        this.gameBoardElement = document.querySelector('#game-board');
        this.limitLeft = document.querySelector("#game-board").clientWidth;
        this.limitDown = document.querySelector("#game-board").clientHeight;
        this.score = document.querySelector("#score");
        this.obstacles = [];
        //Background
        this.backGround = document.querySelector("#background");
        this.backGroundSpeed = 1;
        this.backGroundX = 0;
        //Floor
        this.floor = document.querySelector("#floor"); 
        this.floorSpeed = 0; 
        this.floorX = 0;
        //Score 
        this.points = 0;
    }

    showScore()
    {
        return this.score;
    }

    addObstacle()
    {
        const newobstacleElem =  document.createElement("div");
        const obstacle = new Obstacle(newobstacleElem)
        obstacle.createObstacle();
        this.gameBoardElement.append(obstacle.element);
        this.obstacles.push(obstacle);
    }

    moveObstacle()
    {
        for (let i = 0; i < this.obstacles.length; i++)
        {
            this.obstacles[i].posX += this.obstacles[i].obsSpeed;
            this.obstacles[i].element.style.right = `${this.obstacles[i].posX}px`
            const obsSize = document.querySelector(".obstacle").clientWidth;
            if (this.obstacles[i].posX >= this.limitLeft - obsSize)
            {
                this.points++;
                this.obstacles[i].element.remove()
                this.obstacles.shift(this.obstacles[i])
                this.score.innerText = `${this.points}`;
            }
        }
    }

    moveBackground()
    {
        this.backGroundX -= this.backGroundSpeed;
        this.backGround.style.backgroundPosition = `${this.backGroundX}px`
    }

    moveFloor()
    {
        this.floorX -= this.floorSpeed;
        this.floor.style.backgroundPosition = `${this.floorX}px`;
    }
}
