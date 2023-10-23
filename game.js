console.log("gameBoard.js is working")


class Game
{
    constructor(){
        this.gameOver = false;
        this.score = 0;
        this.gameBoardElement = document.querySelector('#game-board');
        this.limitRight = document.querySelector("#game-board").clientWidth;
        this.limitDown = document.querySelector("#game-board").clientHeight;
        // this.startButtonElement = document.querySelector(".btn")
        this.obstacles = [];
        this.obsSpeed = 5;
        
    }
    showScore()
    {
        return this.score;
    }
    addObstacle()
    {
        const obstacleObj = {
            element: null,
            position:0
        };
        obstacleObj.element = document.createElement("div")
        obstacleObj.element.classList.add("obstacle")
        this.gameBoardElement.append(obstacleObj.element);
        this.obstacles.push(obstacleObj.element);
    }
    moveObstacle(obstacle)
    {
        console.log(obstacle.element)
        obstacle.position += this.obsSpeed;
        obstacle.element.style.right = `${obstacle.position}px`
    }
    
    
}