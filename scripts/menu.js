var gridWidth = 10;
var gridHeight = 20;
var dropRate = 60;
var tetriminoOptions = tetrOp;

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
            tetriminos.push(new tetrimino(tetriminoOptions[Math.floor(Math.random()*tetriminoOptions.length)]));
            tetriminos.push(new tetrimino(tetriminoOptions[Math.floor(Math.random()*tetriminoOptions.length)]));
            tetriminos[0].state = 0;
            gameState = "game";
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerHeight/10 && event.y < game.height/6+15 && event.y > game.height/6-15){
            var prompted = window.prompt("New width:", gridWidth);
            if(prompted != null){
                gridWidth = Number(prompted);
            }
        }
        if(event.x < window.innerWidth/4 && event.x > window.innerHeight/10 && event.y < game.height/6+45 && event.y > game.height/6+15){
            var prompted = window.prompt("New height:", gridHeight);
            if(prompted != null){
                gridHeight = Number(prompted);
            }
        }
    }
});
document.addEventListener("keydown", function(event){
    if(gameState == "menu"){
        if(event.key == '6'){
            tetriminoOptions = hexOp;
        }
        if(event.key == '5'){
            tetriminoOptions = pentOp;
        }
        if(event.key == '4'){
            tetriminoOptions = tetrOp;
        }
        if(event.key == '3'){
            tetriminoOptions = triOp;
        }
        if(event.key == '2'){
            tetriminoOptions = doOp;
        }
        if(event.key == '1'){
            tetriminoOptions = moOp;
        }
        if(event.key == 'd'){
            tetriminoOptions = triDiagOp;
        }
        if(event.key == 't'){
            tetriminoOptions = doDiagOp;
        }
        if(event.key == 'a'){
            tetriminoOptions = allNoDiagOp;
        }
        if(event.key == 'i'){
            tetriminoOptions = lineOp;
        }
        if(event.key = 'l'){
            tetriminoOptions = LOp;
        }
        if(event.key == 'r'){
            tetriminoOptions = randOp;
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
    ctx.fillText("Width: "+gridWidth, game.width/10, game.height/6);
    ctx.fillText("Height: "+gridHeight, game.width/10, game.height/6+30);
    ctx.fillText("Piece Types:", game.width/10, game.height/6+70);
    for(var i = 0; i < tetriminoOptions.length; i++){
        var display = new tetrimino(tetriminoOptions[i], true);
        display.draw((i%((gridWidth+40)*2/4 - 1))*blockSize*4+game.width/50, game.height/6+110+Math.floor(i / ((gridWidth+40)*2/4 - 1))*blockSize*6);
    }
}