console.log("index.js is working!")
const game = new Game();
const newPlayer = new Player();

let gameLoopId;

document.addEventListener("keydown", (event)=>{
    console.log(event);
    if (event.key === 'ArrowUp')
    {
        newPlayer.jump();
    }
    newPlayer.playerElement.style.bottom = `${newPlayer.positionY}px`;
})

const gameLoop = () =>{
    newPlayer.addGravity();
    if(newPlayer.positionY === 0)
        newPlayer.isJumping = false;
    gameLoopId = requestAnimationFrame(gameLoop);
}

gameLoop();