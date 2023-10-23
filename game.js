console.log("gameBoard.js is working")


class Game
{
    constructor(){
        this.gameOver = false;
        this.score = 0;
        this.gameBoardElement = document.querySelector('#game-board');
        this.limitRight = document.querySelector("#game-board").clientWidth;
        this.limitDown = document.querySelector("#game-board").clientHeight;
        // this.startButtonElement = document.querySelector(".btn")
    }
    showScore()
    {
        return this.score;
    }
    
}