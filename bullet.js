class Bullet
{
    constructor(elem)
    {
        
        this.bulletElement = elem;
        this.positionX = this.bulletElement.getBoundingClientRect().x
        this.bulletSpeed = 5;
        this.collision = false;

    }

    colisionStarObstacle(obstacle)
    {
        const bulletPosition = this.bulletElement.getBoundingClientRect();
        for(let i = 0; i < obstacle.length ; i++)
        {
            const obstaclePosition = obstacle[i].element.getBoundingClientRect();
            if (bulletPosition.x < obstaclePosition.x + obstaclePosition.width &&
                bulletPosition.x + bulletPosition.width > obstaclePosition.x &&
                bulletPosition.y < obstaclePosition.y + obstaclePosition.height &&
                bulletPosition.y + bulletPosition.height > obstaclePosition.y )
                {
                    if(obstacle[i].element.className.includes("reward"))
                        return;
                    obstacle[i].element.classList.add("hidden")
                    this.collision = true;
                    
                    console.log("COLISIONNNNN")
                }
        }
    
    }
    moveStar()
    {

    }
}