var game = document.getElementById("game");
var ctx = game.getContext("2d");
var blockSize;
var loop = setInterval(runFrame, 1000/60);
var tetriminos = [];

function runFrame(){
    game.width = window.innerWidth; //set game window size to browser window size
    game.height = window.innerHeight;
    blockSize = game.width / 50; //make the width of a 1x1 space the width of the window / 50.
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,game.width,game.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(blockSize*12, game.height-20*blockSize, blockSize*10, blockSize*20);
    for(var i = 0; i < tetriminos.length; i++){
        tetriminos[i].draw();
    }
}

class tetrimino{
    constructor(type){
        switch(type){
            case 0:
                this.shape = [0,0,0,1,0,2,0,3]; // Line Block
                this.color = "cyan";
                break;
            case 1:
                this.shape = [0,0,0,1,0,2,1,2]; // L Block
                this.color = "blue";
                break;
            case 2:
                this.shape = [1,1,1,1,1,2,0,2]; // Inverse L Block
                this.color = "orange";
                break;
            case 3:
                this.shape = [0,0,0,1,0,2,1,1]; // T Block
                this.color = "purple";
                break;
            case 4:
                this.shape = [0,0,0,1,1,1,1,2]; // Z Block
                this.color = "green";
                break;
            case 5:
                this.shape = [1,0,1,1,0,1,0,2]; // Inverse Z Block
                this.color = "red";
                break;
            case 6:
                this.shape = [0,0,0,1,1,0,1,1]; // Square Block
                this.color = "yellow";
                break;
            default:
                break;
        }
        this.state = 2; //State 2 = menu, 1 = in game falling, 0 = in game still, 3 = hold
        this.x = 4; //X Position is centered from the 0-9 range, since the width of each block other than line is 2 and 4 is to the left of center, blocks go right
        this.y = 0; //Y Position on top
    }
    drawTetrimino(){
        for(var i = 0; i < this.shape.length/2; i++){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.shape[i*2]*blockSize, (this.shape[i*2+1])*blockSize,blockSize,blockSize);
        }
    }
    draw(){
        ctx.save();
        if(this.state == 2){ // We're in the menu. The block should be drawn to the right of the game window
            ctx.translate(blockSize*24, game.height-15*blockSize);
        }
        this.drawTetrimino(); //draw it on the translated point
        ctx.restore();
    }
}
tetriminos.push(new tetrimino(1));