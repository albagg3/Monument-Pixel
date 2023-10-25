console.log("obstacle.js is working")

class Obstacle
{
    constructor(element)
    {
        this.element = element;
        this.posX = 0;
        this.posY = 0;
        this.type= "";
        this.obsSpeed = 3;
        this.obstacleType = ["obs-top", "obs-down", "reward"];
    }

    createObstacle()
    {
        let randomObs = Math.floor(Math.random() * 3)
        this.element.classList.add("obstacle")
        if(this.obstacleType[randomObs] === "obs-top")
            this.posY = 90;
        else if(this.obstacleType[randomObs] === "obs-down")
            this.posY = 0;
        else 
            this.posY = 0
        this.type = this.obstacleType[randomObs]
        this.element.classList.add(this.type);
    }
}
