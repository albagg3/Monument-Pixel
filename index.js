console.log("index.js is working!")
const game = new Game();
const newPlayer = new Player();
const gameOverTitle = document.querySelector(".game-over-title");
const restartBtn = document.querySelector("#restart-btn");

let gameLoopId;
let frames = 0;

document.addEventListener("keydown", (event)=>{
    event.preventDefault();
    // console.log(event);
    if (event.key === 'ArrowUp')
    {
        newPlayer.jump();
    }
    if (event.key === 'ArrowDown')
    {
        newPlayer.down();
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
    // console.log(frames);
    newPlayer.addGravity();
    walkingEffect(frames);
    game.moveBackground();
    let random = (Math.floor(Math.random() * 3)*100);
    if (frames % random === 0)
        game.addObstacle();
    game.moveObstacle();
    for(let i = 0; i < game.obstacles.length; i++)
    {
        newPlayer.checkCollision(game.obstacles[i]);
    }
    if(newPlayer.y === 50)
    newPlayer.isJumping = false;
gameLoopId = requestAnimationFrame(gameLoop);
    if(newPlayer.gameOver)
    {
        
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
    console.log(e);
    newPlayer.gameOver = false;
    
    gameOverTitle.classList.add("hidden")
    restartBtn.classList.add("hidden")
    game.points = 0;
    game.score.innerText = `${game.points}`;
    gameLoop();
})
gameLoop();