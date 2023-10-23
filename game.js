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
        this.obstacleType = ["obs-top", "obs-down"];
        
        
    }
    showScore()
    {
        return this.score;
    }
    addObstacle()
    {
        const obstacleObj = {
            element: null,
            posX:0,
            posY:0,
            type:""
        };
        obstacleObj.element = document.createElement("div")
        let randomObs = Math.floor(Math.random() * 2)
        obstacleObj.element.classList.add("obstacle")
        if(this.obstacleType[randomObs] === "obs-top")
            obstacleObj.posY = 90;
        else
            obstacleObj.posY = 0;
        obstacleObj.type = this.obstacleType[randomObs]
        obstacleObj.element.classList.add(obstacleObj.type);
        this.gameBoardElement.append(obstacleObj.element);
        this.obstacles.push(obstacleObj);
    }
    moveObstacle()
    {
        for (let i = 0; i < this.obstacles.length; i++)
        {
            this.obstacles[i].posX += this.obsSpeed;
            this.obstacles[i].element.style.right = `${this.obstacles[i].posX}px`
        
            const obsSize = document.querySelector(".obstacle").clientWidth;
            if (this.obstacles[i].posX >= this.limitLeft - obsSize)
            {
                console.log("entro")
                this.obstacles[i].element.remove()
                this.obstacles.shift(this.obstacles[i])
            }
        }
        
    }
    
    
}