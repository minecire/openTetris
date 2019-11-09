var gridWidth = 10;
var gridHeight = 25;
var dropRate = 60;
var tetriminoOptions = [9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

var gameState = "menu"; // we're in the menu, not the actual game, to start.

document.addEventListener("mousedown", function(event){
    if(event.x > window.innerWidth/3 && event.x < window.innerWidth*2/3 && gameState == "menu"){
        grid = [];
        for(var i = 0; i < gridWidth; i++){
            grid[i] = [];
            for(var j = 0; j < gridHeight; j++){
                grid[i].push(0);
            }
        }
        loop = setInterval(runFrame, 1000/60);
        rate = dropRate;
        timeLeft = dropRate;
        tetriminos = [];
        tetriminos.push(new tetrimino(tetriminoOptions[Math.floor(Math.random()*tetriminoOptions.length)]));
        tetriminos.push(new tetrimino(tetriminoOptions[Math.floor(Math.random()*tetriminoOptions.length)]));
        tetriminos[0].state = 0;
    }
    gameState = "game";
});