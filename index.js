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
    newPlayer.playerElement.style.bottom = `${newPlayer.positionY}px`;
})

const gameLoop = () =>{
    frames++;
    // console.log(frames);
    newPlayer.addGravity();
    if (frames % 100 === 0)
        game.addObstacle();
    if(game.obstacles.length != 0)
    {
        for(let i = 0; i< game.obsSpeed.length; i++)
        {
            game.moveObstacle(element)
        }
    }
    if(newPlayer.positionY === 50)
        newPlayer.isJumping = false;
    gameLoopId = requestAnimationFrame(gameLoop);
}

gameLoop();