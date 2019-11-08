var game = document.getElementById("game");
var ctx = game.getContext("2d");
var blockSize;
var loop = setInterval(runFrame, 1000/60);
var tetriminos = [];

function runFrame(){
    game.width = window.innerWidth;
    game.height = window.innerHeight;
    blockSize = game.width / 50;
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,game.width,game.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(blockSize*12, game.height-20*blockSize, blockSize*10, blockSize*20);
}

class tetrimino{
    constructor(type){
        switch(type){
            case 0:
                this.shape = [0,0,0,1,0,2,0,3]; // Line Block
                break;
            case 1:
                this.shape = [0,0,0,1,0,2,1,2]; // L Block
                break;
            case 2:
                this.shape = [1,1,1,1,1,2,0,2]; // Inverse L Block
                break;
            case 3:
                this.shape = [0,0,0,1,0,2,1,1]; // T Block
                break;
            case 4:
                this.shape = [0,0,0,1,1,1,1,2]; // Z Block
                break;
            case 5:
                this.shape = [1,0,1,1,0,1,0,2]; // Inverse Z Block
                break;
            case 6:
                this.shape = [0,0,0,1,1,0,1,1]; // Square Block
        }
        this.state = 3;
        this.x = 10;
        this.y = 0;
    }
}