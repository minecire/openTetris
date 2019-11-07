game = document.getElementById("game");
ctx = game.getContext("2d");

loop = setInterval(runFrame, 1000/60);

function runFrame(){
    game.width = window.innerWidth;
    game.height = window.innerHeight;
    ctx.fillStyle = "#003366";
    ctx.fillRect(0,0,game.width,game.height);
}