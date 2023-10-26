console.log("index.js is working!")
const game = new Game();
const newPlayer = new Player();
const gameOverTitle = document.querySelector(".game-over-title");
const restartBtn = document.querySelector("#restart-btn");
const levelElement = document.querySelector("#level");
let gameLoopId;
let frames = 0;
let speed = 3;
let level = 1;
let ongoingShooting = false;

const monumentValleyMusic = new Audio("./music/01 Amateur Cartography.mp3")

document.addEventListener("keydown", (event)=>{
    event.preventDefault();
    if (event.key === 'ArrowUp')
    {
        newPlayer.jump();
    }
    if (event.key === 'ArrowDown')
    {
        newPlayer.down();
    }
    if( event.key === ' ')
    {
        if(newPlayer.stars > 0 )
        {
            newPlayer.stars--;
            const bulletElem =  document.createElement("div");
            const bullet = new Bullet(bulletElem)
            console.log(game.bulletArr);
            bulletElem.classList.add("bullet")
            game.bulletArr.push( bullet);
            game.gameBoardElement.append(bulletElem);
            document.querySelector(".reward-accum").remove();
        }
    }
    newPlayer.playerElement.style.bottom = `${newPlayer.y}px`;
    
})

document.addEventListener("keyup", (event)=>{
    event.preventDefault();
    if (event.key === 'ArrowDown')
    {
        newPlayer.up();
    }
    newPlayer.playerElement.style.bottom = `${newPlayer.y}px`;
})

const walkingEffect = (timeframes)=>{
    if (timeframes % 5 === 0)
    {
        newPlayer.playerElement.classList.add("walk1");
        newPlayer.playerElement.classList.remove("walk2");
    }
    else
    {
        newPlayer.playerElement.classList.add("walk2");
        newPlayer.playerElement.classList.remove("walk1");
    }
}

const gameLoop = () =>{
    frames++;
    newPlayer.addGravity();
    walkingEffect(frames);
    game.moveBackground();
    game.moveFloor();
    let random = (Math.floor(Math.random() * 3)*100);
    if (frames % random === 0)
        game.addObstacle();
    if(frames % 600  === 0)
        {
            level++
            speed++;
            levelElement.innerText = `LEVEL ${level}`
        }
    game.moveObstacle(speed);
    if(game.bulletArr.length > 0)
    {
        console.log("entro")
        game.moveBullet()
    }
    for(let i = 0; i < game.obstacles.length; i++)
    {
        newPlayer.checkCollision(game.obstacles[i]);
    }
    if(newPlayer.y === 50)
    {
        newPlayer.isJumping = false;
    }
    gameLoopId = requestAnimationFrame(gameLoop);
    if(newPlayer.gameOver)
    {
        monumentValleyMusic.pause()
        gameOverTitle.innerText = "GAME OVER"
        game.obstacles = [];
        gameOverTitle.classList.remove("hidden")
        restartBtn.classList.remove("hidden")
        obstaclesElements = document.querySelectorAll(".obstacle")
        for(let i = 0; i < obstaclesElements.length; i++)
        {
            obstaclesElements[i].remove();
        }
        cancelAnimationFrame(gameLoopId);
    }
}

restartBtn.addEventListener('click', (e)=>{
    monumentValleyMusic.play()
    newPlayer.gameOver = false;
    gameOverTitle.classList.add("hidden")
    restartBtn.classList.add("hidden")
    const starsleft = document.querySelectorAll(".reward-accum");
    console.log(starsleft);
    if(starsleft.length !== 0)
    {
        for(let i = 0; i < starsleft.length ; i++)
        {
            starsleft[i].remove();
        }
    }
    speed = 3;
    game.points = 0;
    game.score.innerText = `${game.points}`;
    level = 1;
    levelElement.innerText = `LEVEL ${level}`;
    gameLoop();
})
