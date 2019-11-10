var game = document.getElementById("game");
var ctx = game.getContext("2d");
var blockSize;
var loop;
var rate;
var timeLeft;
var tetriminos;
var grid;
document.addEventListener("keydown",function(event){
        if(gameState == "game"){
            if(event.keyCode == 37){
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == 0){
                        tetriminos[i].moveLeft();
                    }
                }
            }
            if(event.keyCode == 38){
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == 0){
                        tetriminos[i].rotate(0);
                    }
                }
            }
            if(event.keyCode == 39){
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == 0){
                        tetriminos[i].moveRight();
                    }
                }
            }
            if(event.keyCode == 40){
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == 0){
                        tetriminos[i].update();
                    }
                }
                clearLines();
            }
        }
        });
function runFrame(){
    game.width = window.innerWidth; //set game window size to browser window size
    game.height = window.innerHeight;
    blockSize = game.width / (gridWidth+40); //make the width of a 1x1 space the width of the window / width of grid+40.
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,game.width,game.height);
    ctx.fillStyle = "#000000";
    timeLeft--;
    
    ctx.fillRect(blockSize*12, game.height-gridHeight*blockSize, blockSize*gridWidth, blockSize*gridHeight);
    for(var i = 0; i < tetriminos.length; i++){
        tetriminos[i].draw();
        if(timeLeft == 0){
            tetriminos[i].update();
        }
    }
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[i].length; j++){
            if(grid[i][j] != 0){
                ctx.fillStyle = grid[i][j];
                ctx.fillRect(blockSize*(12+i),game.height-(gridHeight-j)*blockSize, blockSize, blockSize);
            }
        }
    }
    if(timeLeft == 0){
        clearLines();
        timeLeft = rate;
    }
}

class tetrimino{
    constructor(type,menu){
        this.shape = setShape(type).shape;
        this.color = setShape(type).color;
        this.center = setShape(type).center;
        this.state = 1; //State 1 = upcoming, 0 = in game falling, 2 = hold
        this.x = Math.ceil(gridWidth/2)-1; //X Position is centered from the 0-9 range, since the width of each block other than line is 2 and 4 is to the left of center, blocks go right
        this.y = 0; //Y Position on top
        this.menu = menu;
    }
    drawTetrimino(){
        for(var i = 0; i < this.shape.length/2; i++){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.shape[i*2]*blockSize, (this.shape[i*2+1])*blockSize,blockSize,blockSize);
        }
    }
    draw(x, y){
        ctx.save();
        if(!this.menu){
            if(this.state == 1){ // We're in the upcoming pieces. The block should be drawn to the right of the game window
                ctx.translate(blockSize*(14+gridWidth), game.height-15*blockSize);
            }
            else if(this.state == 0){
                ctx.translate(blockSize*(12+this.x), game.height-blockSize*(gridHeight-this.y));
            }
        }
        else{
            ctx.translate(x,y);
        }
        this.drawTetrimino(); //draw it on the translated point
        ctx.restore();
    }
    update(){
        if(this.state == 0){
            
            for(var i = 0; i < this.shape.length/2; i++){
                if(grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y] != 0){
                    gameState = "menu";
                    clearInterval(loop);
                    loop = setInterval(runMenuFrame,1000/60);
                }
                if(this.shape[i*2+1]+this.y > gridHeight || grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y+1] != 0){
                    
                    this.settle(); // if the space below isn't empty, settle the block where it is.
                    return;
                }
            }
            this.y++;
        }
    }
    settle(){
        for(var i = 0; i < this.shape.length/2; i++){
            grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y] = this.color;
        }
        remove(this);
        for(var j = 0; j < tetriminos.length; j++){
            if(tetriminos[j].state == 1){
                tetriminos[j].state = 0;
            }
        }
        tetriminos.push(new tetrimino(tetriminoOptions[Math.floor(Math.random()*tetriminoOptions.length)]));
    }
    moveLeft(){
        for(var i = 0; i < this.shape.length/2; i++){
            if((this.shape[i*2]+this.x <= 0 || grid[this.shape[i*2]+this.x-1][this.shape[i*2+1]+this.y] != 0)){
                return;
            }
        }
        this.x--;
    }
    moveRight(){
        for(var i = 0; i < this.shape.length/2; i++){
            if((this.shape[i*2]+this.x >= gridWidth || grid[this.shape[i*2]+this.x+1][this.shape[i*2+1]+this.y] != 0)){
                return;
            }
        }
        this.x++;
    }
    rotate(dir){
        if(dir > 3){
            return;
        }
        for(var i = 0; i < this.shape.length/2; i++){
            var rotatedCoords = getRotatedCoords(this.shape[i*2], this.shape[i*2+1], this.center[0], this.center[1]);
            if(dir == 1){
                rotatedCoords[1]--;
            }
            else if(dir == 2){
                rotatedCoords[0]--;
            }
            else if(dir == 3){
                rotatedCoords[0]++;
            }
            if(rotatedCoords[0]+this.x < 0 || rotatedCoords[0]+this.x >= grid.length || rotatedCoords[1]+this.y < 0 || rotatedCoords[1]+this.y >= grid[0].length){
                this.rotate(dir+1);
                return;
            }
            if(grid[rotatedCoords[0]+this.x][rotatedCoords[1]+this.y] != 0){
                this.rotate(dir+1);
                return;
            }
        }
        for(var i = 0; i < this.shape.length/2; i++){
            var rotatedCoords = getRotatedCoords(this.shape[i*2], this.shape[i*2+1], this.center[0], this.center[1]);
            if(dir == 1){
                rotatedCoords[1]--;
            }
            else if(dir == 2){
                rotatedCoords[0]--;
            }
            else if(dir == 3){
                rotatedCoords[0]++;
            }
            this.shape[i*2] = rotatedCoords[0];
            this.shape[i*2+1] = rotatedCoords[1];
        }
    }
}
function remove(item){
    for(var i = 0; i < tetriminos.length; i++){
        if(tetriminos[i] == item){
            if(i == 0){
                tetriminos = tetriminos.slice(i + 1, tetriminos.length);
            }
            else{
                tetriminos = tetriminos.slice(0,i).concat(tetriminos.slice(i+1,tetriminos.length));
            }
        }
    }
}
function getRotatedCoords(x, y, centerX, centerY){
    var result = [];
    result[0] = (-y+centerY)+centerX;
    result[1] = (x-centerX)+centerY
    return result;
}
function clearLines(){
    for(var i = 0; i < grid[0].length; i++){
        var linefull = true;
        for(var j = 0; j < grid.length; j++){
            if(grid[j][i] == 0){
                linefull = false;
            }
        }
        if(linefull){
            for(var j = i; j >= 0; j--){
                for(var k = 0; k < grid.length; k++){
                    if(j > 0){
                        grid[k][j] = grid[k][j-1];
                    }
                    else{
                        grid[k][j] = 0;
                    }
                }
            }
        }
    }
}