console.log("gameBoard.js is working")


class Game
{
    constructor(){
       
        this.score = 0;
        this.gameBoardElement = document.querySelector('#game-board');
        this.limitLeft = document.querySelector("#game-board").clientWidth;
        this.limitDown = document.querySelector("#game-board").clientHeight;
        // this.startButtonElement = document.querySelector(".btn")
        this.obstacles = [];
        this.obsSpeed = 3;
        
        
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
        this.obstacles.push(obstacleObj);
    }
    moveObstacle()
    {
        for (let i = 0; i < this.obstacles.length; i++)
        {
            this.obstacles[i].position += this.obsSpeed;
            this.obstacles[i].element.style.right = `${this.obstacles[i].position}px`
        
            const obsSize = document.querySelector(".obstacle").clientWidth;
            if (this.obstacles[i].position >= this.limitLeft - obsSize)
            {
                console.log("entro")
                this.obstacles[i].element.remove()
                this.obstacles.shift(this.obstacles[i])
            }

        }
        
    }
    
    
}