var gridWidth = 10;
var gridHeight = 20;
var dropRate = 48;
var level = 0;
var tetriminoOptions = tetrOp;
var increaseLevel = true;
var density = 7;
var junkHeight = 12;
var gameMode = 'A';
var tetrMinParts = 2;
var tetrMaxParts = 9;
var aheadAmount = 1;
var holdEnabled = true;
var startLevel = 0;

var gameState = "menu"; // we're in the menu, not the actual game, to start.

document.addEventListener("mousedown", function(event){
    if(gameState == "menu"){
        if(event.x > window.innerWidth/3 && event.x < window.innerWidth*2/3 && event.y > window.innerHeight*2/3 && event.y < window.innerHeight*5/6){
            grid = [];
            for(var i = 0; i < gridWidth; i++){
                grid[i] = [];
                for(var j = 0; j < gridHeight; j++){
                    grid[i].push(0);
                }
            }
            clearInterval(loop);
            loop = setInterval(runFrame, 1000/60);
            rate = dropRate;
            timeLeft = dropRate;
            tetriminos = [];
            tetrOpsLeft = [];
            for(var i = 0; i < tetriminoOptions.length; i++){
                tetrOpsLeft[i] = tetriminoOptions[i];
            }
            var option = Math.floor(Math.random()*tetrOpsLeft.length);
            tetriminos.push(new tetrimino(tetrOpsLeft[option]));
            if (option == 0) {
                tetrOpsLeft = tetrOpsLeft.slice(1, tetrOpsLeft.length);
            } else if (option == tetrOpsLeft.length - 1) {
                tetrOpsLeft = tetrOpsLeft.slice(0, tetrOpsLeft.length - 1);
            } else {
                tetrOpsLeft = tetrOpsLeft.slice(0, option).concat(tetrOpsLeft.slice(option + 1, tetrOpsLeft.length));
            }
            if (tetrOpsLeft.length < 1) {
                for (var i = 0; i < tetriminoOptions.length; i++) {
                    tetrOpsLeft.push(tetriminoOptions[i]);
                }
            }
            for(var i = 0; i < aheadAmount; i++){
                option = Math.floor(Math.random() * tetrOpsLeft.length);
                tetriminos.push(new tetrimino(tetrOpsLeft[option]));
                if (option == 0) {
                    tetrOpsLeft = tetrOpsLeft.slice(1, tetrOpsLeft.length);
                } else if (option == tetrOpsLeft.length - 1) {
                    tetrOpsLeft = tetrOpsLeft.slice(0, tetrOpsLeft.length - 1);
                } else {
                    tetrOpsLeft = tetrOpsLeft.slice(0, option).concat(tetrOpsLeft.slice(option + 1, tetrOpsLeft.length));
                }
                if (tetrOpsLeft.length < 1) {
                    for (var j = 0; j < tetriminoOptions.length; j++) {
                        tetrOpsLeft.push(tetriminoOptions[i]);
                    }
                }
                tetriminos[tetriminos.length-1].state = i+1;
            }
            tetriminos[0].state = 0;
            console.log(tetriminos);
            if(gameMode == 'B'){
                for(var i = 0; i < junkHeight*density; i++){
                    while(true){
                        var xPos = Math.floor(Math.random()*gridWidth);
                        var yPos = Math.floor(Math.random()*junkHeight+gridHeight-junkHeight);
                        var brk = false;
                        for(var j = 0; j < grid.length; j++){
                            if(grid[j][yPos] == 0 && j != xPos){  
                                brk = true;
                            }
                        }
                        if(brk == true && grid[xPos][yPos] == 0){
                            grid[xPos][yPos] = "#777777";
                            break;
                        }
                    }
                }
            }
            level = startLevel;
            score = 0;
            lineCount = 0;
            gameState = "game";
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerWidth/10 && event.y < game.height/6-45 && event.y > game.height/6-75){
            var prompted = window.prompt("New amount:", aheadAmount);
            if(prompted != null){
                aheadAmount = Number(prompted);
            }
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerWidth/10 && event.y < game.height/6-15 && event.y > game.height/6-45){
            holdEnabled = !holdEnabled;
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerWidth/10 && event.y < game.height/6+15 && event.y > game.height/6-15){
            var prompted = window.prompt("New width:", gridWidth);
            if(prompted != null){
                gridWidth = Number(prompted);
            }
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerWidth/10 && event.y < game.height/6+45 && event.y > game.height/6+15){
            var prompted = window.prompt("New height:", gridHeight);
            if(prompted != null){
                gridHeight = Number(prompted);
            }
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerWidth/10 && event.y < game.height*3/5+15 && event.y > game.height*3/5-15 && (tetriminoOptions[0] == 1337 || tetriminoOptions[0] == 69420)){
            var prompted = window.prompt("New minimum:", tetrMinParts);
            if(prompted != null){
                tetrMinParts = Number(prompted);
                if(tetrMinParts > tetrMaxParts){
                    tetrMaxParts = tetrMinParts;
                }
            }
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerHeight/10 && event.y < game.height*3/5+45 && event.y > game.height*3/5+15 && (tetriminoOptions[0] == 1337 || tetriminoOptions[0] == 69420)){
            var prompted = window.prompt("New maximum:", tetrMaxParts);
            if(prompted != null){
                tetrMaxParts = Number(prompted);
                if(tetrMaxParts < tetrMinParts){
                    tetrMinParts = tetrMaxParts;
                }
            }
        }
        if(event.x > game.width*2/3 && event.x < game.width*7/8 && event.y  > game.height/6-15 && event.y < game.height/6+15){
            if(gameMode == 'A'){
                gameMode = 'B';
            }
            else{
                gameMode = 'A';
            }
        }
        if(event.x > game.width*2/3 && event.x < game.width*7/8 && event.y  > game.height/6+15 && event.y < game.height/6+45 && gameMode == 'B'){
            var prompted = window.prompt("New density:", density);
            if(prompted != null){
                if(prompted >= gridWidth){
                    density = gridWidth-1;
                }
                else{
                    density = Number(prompted);
                }
            }
        }
        if(event.x > game.width*2/3 && event.x < game.width*7/8 && event.y  > game.height/6+45 && event.y < game.height/6+75 && gameMode == 'B'){
            var prompted = window.prompt("New junk height:", junkHeight);
            if(prompted != null){
                if(junkHeight >= gridHeight){
                    junkHeight = gridHeight-1;
                }
                junkHeight = Number(prompted);
            }
        }
        if(event.x < game.width*2/3 && event.x > game.width*13/30 && event.y  > game.height/6-15 && event.y < game.height/6+15){
            var prompted = window.prompt("New Drop Rate:", dropRate);
            if(prompted != null){
                dropRate = Number(prompted);
                if(dropRate > 48){
                    startLevel = 0;
                }
                else if(dropRate >= 6){
                    startLevel = Math.floor(-dropRate/5+10);
                }
                else if(dropRate == 5){
                    startLevel = 10;
                }
                else if(dropRate == 4){
                    startLevel = 13;
                }
                else if(dropRate == 3){
                    startLevel = 16;
                }
                else if(dropRate == 2){
                    startLevel = 19;
                }
                else if(dropRate == 1){
                    startLevel = 29;
                }
                else{
                    startLevel = 0;
                }
            }
            
        }
        if(event.x < game.width*2/3 && event.x > game.width*13/30 && event.y  > game.height/6+15 && event.y < game.height/6+45){
            var prompted = window.prompt("New Level:", startLevel);
            if(prompted != null){
                startLevel = Number(prompted);
                if(startLevel < 9){
                    dropRate = 48-startLevel*5;
                }
                else if(startLevel == 9){
                    dropRate = 6;
                }
                else if(startLevel < 13){
                    dropRate = 5;
                }
                else if(startLevel < 16){
                    dropRate = 4;
                }
                else if(startLevel < 19){
                    dropRate = 3;
                }
                else if(startLevel < 29){
                    dropRate = 2;
                }
                else{
                    dropRate = 1;
                }
            }
        }
        if(event.x < game.width*2/3 && event.x > game.width*10/30 && event.y  > game.height/6+45 && event.y < game.height/6+75){
            increaseLevel = !increaseLevel;
        }
    }
});

loop = setInterval(runMenuFrame, 1000/60);

function runMenuFrame(){
    game.width = window.innerWidth; //set game window size to browser window size
    game.height = window.innerHeight;
    blockSize = game.width / (gridWidth+40) / 2; //make the width of a 1x1 space the width of the window / width of grid+40.
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,game.width,game.height);
    ctx.fillStyle = "#0088EE";
    ctx.fillRect(game.width/3, game.height*2/3, game.width/3, game.height/6);
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "50px Courier";
    ctx.fillText("Start Game", game.width/2, game.height*3/4);
    ctx.font = "30px Courier";
    ctx.textAlign = "left";
    ctx.fillText("Look Ahead Amount: "+aheadAmount, game.width/10, game.height/6-60);
    ctx.fillText("Enable Hold? "+holdEnabled, game.width/10, game.height/6-30);
    ctx.fillText("Width: "+gridWidth, game.width/10, game.height/6);
    ctx.fillText("Height: "+gridHeight, game.width/10, game.height/6+30);
    ctx.fillText("Polymino Types:", game.width/10, game.height/6+70);
    if(tetriminoOptions[0] == 1337 || tetriminoOptions[0] == 69420){
        ctx.fillText("Minimum Parts: "+tetrMinParts, game.width/10, game.height*3/5);
        ctx.fillText("Maximum Parts: "+tetrMaxParts, game.width/10, game.height*3/5+30);
    }
    ctx.fillText("change types with 1 2 3 4 5 6 d t a i l z r f x b e", game.width/20, game.height/6+100);
    ctx.fillText("Rate: "+dropRate, game.width*13/30, game.height/6);
    ctx.fillText("(Level: "+startLevel+")", game.width*13/30, game.height/6+30);
    ctx.fillText("Gradually increase? "+increaseLevel, game.width*10/30, game.height/6+60);
    ctx.fillText("Mode "+gameMode, game.width*2/3, game.height/6);
    if(gameMode == 'B'){
        ctx.fillText("Avg. Junk Density: "+density+"/"+gridWidth, game.width*2/3, game.height/6+30);
        ctx.fillText("Junk Height: "+junkHeight+"/"+gridHeight, game.width*2/3, game.height*1/6+60);
    }
    for(var i = 0; i < tetriminoOptions.length; i++){
        var display = new tetrimino(tetriminoOptions[i], true);
        display.draw((i%((gridWidth+40)*2/4 - 1))*blockSize*4+game.width/50, game.height/6+120+Math.floor(i / ((gridWidth+40)*2/4 - 1))*blockSize*6);
    }
}