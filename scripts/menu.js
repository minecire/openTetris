var gridWidth = 160;
var gridHeight = 80;
var dropRate = 60;
var tetriminoOptions = [29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];

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