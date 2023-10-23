console.log("index.js is working!")
const game = new Game();
const newPlayer = new Player();


let gameLoopId;
let frames = 0;

document.addEventListener("keydown", (event)=>{
    console.log(event);
    if (event.key === 'ArrowUp')
    {
        newPlayer.jump();
    }
    newPlayer.playerElement.style.bottom = `${newPlayer.y}px`;
})

const gameLoop = () =>{
    frames++;
    // console.log(frames);
    newPlayer.addGravity();
    if (frames % 100 === 0)
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
        cancelAnimationFrame(gameLoopId);
}

gameLoop();