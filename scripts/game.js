var game = document.getElementById("game");
var ctx = game.getContext("2d");
var blockSize;
var loop;
var rate;
var timeLeft;
var tetriminos;
var lineCount = 0;
var grid;
var score;
var swappedThisTurn = false;
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
            if(event.keyCode == 32){
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == 0){
                        while(tetriminos[i].settleWait < 0){
                            tetriminos[i].update();
                        }
                        tetriminos[i].settleWait = 1;
                    }
                }
            }
            if(event.key == 'a' && !swappedThisTurn){
                swappedThisTurn = true;
                var isAHold = false;
                for(var i = 0; i < tetriminos.length; i++){
                    if(tetriminos[i].state == -1){
                        isAHold = true;
                        tetriminos[i].state = 0;
                        tetriminos[i].x = Math.ceil(gridWidth/2)-Math.floor(tetriminos[i].center[0]); //X Position is centered from the 0-9 range, since the width of each block other than line is 2 and 4 is to the left of center, blocks go right
                        tetriminos[i].y = -Math.floor(tetriminos[i].center[1]); //Y Position on top
                    }
                    else if(tetriminos[i].state == 0){
                        tetriminos[i].state = -1;
                    }
                    
                }
                if(!isAHold){
                    for(var i = 0; i < tetriminos.length; i++){
                        if(tetriminos[i].state > 0){
                            tetriminos[i].state--;
                        }
                    }
                    var option = Math.floor(Math.random()*tetrOpsLeft.length);
                    tetriminos.push(new tetrimino(tetrOpsLeft[option]));
                    if(tetrOpsLeft.length < 2){
                        for(var i = 0; i < tetriminoOptions.length; i++){
                            tetrOpsLeft[i] = tetriminoOptions[i];
                        }
                    }
                    else if(option == 0){
                        tetrOpsLeft = tetrOpsLeft.slice(1,tetrOpsLeft.length);
                    }
                    else if(option == tetrOpsLeft.length-1){
                        tetrOpsLeft = tetrOpsLeft.slice(0,tetrOpsLeft.length-1);
                    }
                    else{
                        tetrOpsLeft = tetrOpsLeft.slice(0, option).concat(tetrOpsLeft.slice(option + 1, tetrOpsLeft.length));
                    }
                }
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
        tetriminos[i].settleWait--;
        if(tetriminos[i].settleWait == 0){
            tetriminos[i].update();
        }
        tetriminos[i].draw();
        if(timeLeft == 0){
            tetriminos[i].update();
        }
    }
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[i].length; j++){
            if(grid[i][j] != 0){
                ctx.fillStyle = grid[i][j];
                ctx.fillRect(blockSize*(12+i)+blockSize/40,game.height-(gridHeight-j)*blockSize+blockSize/40, blockSize*19/20, blockSize*19/20);
            }
        }
    }
    if(timeLeft == 0){
        clearLines();
        timeLeft = rate;
    }
    ctx.fillStyle = "black";
    ctx.font = "40px Courier";
    ctx.fillText(score, game.width/30, game.height*2/3);
    ctx.fillText(lineCount + " lines", game.width/30, game.height*2/3+40);
    ctx.fillText("Level "+level, game.width/30, game.height*2/3+80);
}

class tetrimino{
    constructor(type,menu){
        this.shape = setShape(type).shape;
        this.color = setShape(type).color;
        this.center = setShape(type).center;
        this.state = 1; //State 1 = upcoming, 0 = in game falling, 2 = hold
        this.x = Math.ceil(gridWidth/2)-Math.floor(this.center[0]); //X Position is centered from the 0-9 range, since the width of each block other than line is 2 and 4 is to the left of center, blocks go right
        this.y = -Math.floor(this.center[1]); //Y Position on top
        this.menu = menu;
        this.settleWait = -1;
    }
    drawTetrimino(){
        for(var i = 0; i < this.shape.length/2; i++){
            ctx.fillStyle=this.color;
            ctx.fillRect(this.shape[i*2]*blockSize+blockSize/20, (this.shape[i*2+1])*blockSize+blockSize/20,blockSize*9/10,blockSize*9/10);
        }
    }
    draw(x, y){
        ctx.save();
        if(!this.menu){
            if(this.state > 0){ // We're in the upcoming pieces. The block should be drawn to the right of the game window
                ctx.translate(blockSize*(14+gridWidth), game.height-20*blockSize+5*blockSize*this.state);
            }
            else if(this.state == 0){
                ctx.translate(blockSize*(12+this.x), game.height-blockSize*(gridHeight-this.y));
            }
            else{
                ctx.translate(blockSize*6, game.height-blockSize*20);
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
            var resetWait = true;
            for(var i = 0; i < this.shape.length/2; i++){
                if(grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y] != 0){
                    if(this.shape[i*2+1]+this.y >= 0){
                        gameState = "menu";
                        clearInterval(loop);
                        loop = setInterval(runMenuFrame,1000/60);
                    }
                }
                if(this.shape[i*2+1]+this.y > gridHeight || (grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y+1] != 0 && this.shape[i*2+1]+this.y >= 0)){
                    if(this.settleWait < 0){
                        this.settleWait = 20;
                        return;
                    }
                    resetWait = false;
                }
            }
            if(resetWait){
                this.settleWait = -1;
            }
            if(this.settleWait < 0){
                this.y++;
            }
        }
        if(this.settleWait == 0){
            this.settle();
            return;
        }
    }
    settle(){
        swappedThisTurn = false;
        for(var i = 0; i < this.shape.length/2; i++){
            grid[this.shape[i*2]+this.x][this.shape[i*2+1]+this.y] = this.color;
        }
        remove(this);
        for(var j = 0; j < tetriminos.length; j++){
            if(tetriminos[j].state == 1){
                tetriminos[j].state = 0;
            }
        }
        var option = Math.floor(Math.random()*tetrOpsLeft.length);
        tetriminos.push(new tetrimino(tetrOpsLeft[option]));
        if(tetrOpsLeft.length < 2){
            for(var i = 0; i < tetriminoOptions.length; i++){
                tetrOpsLeft[i] = tetriminoOptions[i];
            }
        }
        else if(option == 0){
            tetrOpsLeft = tetrOpsLeft.slice(1,tetrOpsLeft.length);
        }
        else if(option == tetrOpsLeft.length-1){
            tetrOpsLeft = tetrOpsLeft.slice(0,tetrOpsLeft.length-1);
        }
        else{
            tetrOpsLeft = tetrOpsLeft.slice(0, option).concat(tetrOpsLeft.slice(option + 1, tetrOpsLeft.length));
        }
    }
    moveLeft(){
        for(var i = 0; i < this.shape.length/2; i++){
            if(this.shape[i*2]+this.x <= 0 || (grid[this.shape[i*2]+this.x-1][this.shape[i*2+1]+this.y] != 0 && this.shape[i*2]+this.y > 0)){
                return;
            }
        }
        this.x--;
    }
    moveRight(){
        for(var i = 0; i < this.shape.length/2; i++){
            if (this.shape[i * 2] + this.x >= gridWidth || (grid[this.shape[i*2]+this.x+1][this.shape[i*2+1]+this.y] != 0 && this.shape[i*2]+this.y > 0)) {
                return;
            }
        }
        this.x++;
    }
    rotate(dir){
        if(dir > 4){
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
            else if(dir == 4){
                rotatedCoords[1]++;
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
            else if(dir == 4){
                rotatedCoords[1]++;
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
    result[1] = (x-centerX)+centerY;
    return result;
}
function clearLines(){
    var totalCleared = 0;
    for(var i = 0; i < grid[0].length; i++){
        var linefull = true;
        for(var j = 0; j < grid.length; j++){
            if(grid[j][i] == 0){
                linefull = false;
            }
        }
        if(linefull){
            totalCleared++;
            lineCount++;
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
            if(lineCount % 10 == 0){
                level++;
                if(level < 9){
                    rate = 48-level*3;
                }
                else if(level == 9){
                    rate = 6;
                }
                else if(level < 13){
                    rate = 5;
                }
                else if(level < 16){
                    rate = 4;
                }
                else if(level < 19){
                    rate = 3;
                }
                else if(level < 29){
                    rate = 2;
                }
                else{
                    rate = 1;
                }
            }
        }
    }
    if(totalCleared == 1){
        score += 40*level+40;
    }
    if(totalCleared == 2){
        score += 100*level+100;
    }
    if(totalCleared == 3){
        score += 300*level+300;
    }
    if(totalCleared == 4){
        score += 1200*level+1200;
    }
    else{
        score += totalCleared*totalCleared*totalCleared*100;
    }
}