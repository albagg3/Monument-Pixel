class Star
{
    constructor()
    {
        this.starElement = document.querySelector(".bullet")
        this.starX = 0;
        this.starSpeed = 4;

    }

    colisionStarObstacle(obstacle)
    {
        const starPosition = this.starElement.getBoundingClientRect();
        const obstaclePosition = obstacle.element.getBoundingClientRect();
        if (starPosition.x < obstaclePosition.x + obstaclePosition.width &&
            starPosition.x + starPosition.width > obstaclePosition.x &&
            starPosition.y < obstaclePosition.y + obstaclePosition.height &&
            starPosition.y + starPosition.height > obstaclePosition.y)
        {
            console.log("COLISIONNNNN")
        }
    
    }
    moveStar()
    {

    }
}