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
        this.shape = type;
        this.state = 3;
        this.x = 10;
        this.y = 0;
    }
}