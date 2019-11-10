//lists of tetriminos
var hexOp = [29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];
var pentOp = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
var tetrOp = [4,5,6,7,8,9,10];
var triOp = [2,3];
var doOp = [1];
var moOp = [0];
var doDiagOp = [1,-1];
var triDiagOp = [2,3,-2,-3,-4,-5];
var tetrDiagOp = [4,5,6,7,8,9,10,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28];
var allNoDiagOp = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];
var randOp = [69420];
var lineOp = [0,1,2,4,11,29];
var LOp = [3,5,6,12,13,14,30,31,43,44];
var zOp = [8,9];
var shitOp = [-28, -27, -26, -22, -18, -17, -5, 8, 9, 27];
var blockOp = [0,1,2,4,10,11,29,65];
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
        if(event.key == 'l'){
            tetriminoOptions = LOp;
        }
        if(event.key == 'r'){
            tetriminoOptions = randOp;
        }
        if(event.key == 'z'){
            tetriminoOptions = zOp;
        }
        if(event.key == 'f'){
            tetriminoOptions = tetrDiagOp;
        }
        if(event.key == 'x'){
            tetriminoOptions = shitOp;
        }
        if(event.key == 'b'){
            tetriminoOptions = blockOp;
        }
    }
});
function setShape(type){
    switch(type){
        case 69420:
            this.shape = [];
            for(var i = 0; i < Math.floor(Math.random()*20)+2; i++){
                this.shape.push(Math.floor(Math.random()*5));
                this.shape.push(Math.floor(Math.random()*5));
            }
            this.color = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
            this.center = [2.5,2.5];
            break;
        case -28:
            this.shape = [1,0,0,1,1,2,2,1];
            this.color = "#774400";
            this.center = [1,1];
            break;
        case -27:
            this.shape = [0,0,1,1,0,2,1,3];
            this.color = "#FF4400";
            this.center = [1.5,1.5];
            break;
        case -26:
            this.shape = [1,0,0,1,1,2,0,3];
            this.color = "#44FF44";
            this.center = [1.5,1.5];
            break;
        case -25:
            this.shape = [0,0,1,1,2,0,2,2];
            this.color = "#DD00DD";
            this.center = [1.5,1.5];
            break;
        case -24:
            this.shape = [2,0,1,1,0,2,1,3];
            this.color = "#DDDD00";
            this.center = [2,2];
            break;
        case -23:
            this.shape = [0,0,1,1,2,2,1,3];
            this.color = "#0000DD";
            this.center = [2,2];
            break;
        case -22:
            this.shape = [0,0,1,1,2,2,3,3];
            this.color = "#6600FF";
            this.center = [2,2];
            break;
        case -21:
            this.shape = [0,0,1,1,1,2,2,3];
            this.color = "#00BBFF";
            this.center = [1,2];
            break;
        case -20:
            this.shape = [2,0,1,1,1,2,0,3];
            this.color = "#FFBB00";
            this.center = [1,2];
            break;
        case -19:
            this.shape = [1,0,0,1,0,2,1,3];
            this.color = "#77FFFF";
            this.center = [1,2];
            break;
        case -18:
            this.shape = [1,0,0,1,2,1,0,2];
            this.color = "#7777FF";
            this.center = [1.5,1.5];
            break;
        case -17:
            this.shape = [1,0,0,1,2,1,2,2];
            this.color = "#FF7777";
            this.center = [1.5,1.5];
            break;
        case -16:
            this.shape = [1,0,0,1,1,2,1,3];
            this.color = "#9999EE";
            this.center = [0,1];
            break;
        case -15:
            this.shape = [0,0,1,1,0,2,0,3];
            this.color = "#000077";
            this.center = [0,1];
            break;
        case -14:
            this.shape = [2,0,1,1,0,2,0,3];
            this.color = "#FF99FF";
            this.center = [1.5,1.5];
            break;
        case -13:
            this.shape = [0,0,1,1,2,2,2,3];
            this.color = "#99FF99";
            this.center = [1.5,1.5];
            break;
        case -12:
            this.shape = [0,0,1,1,2,1,1,2];
            this.color = "#FFFF77";
            this.center = [1.5,1.5];
            break;
        case -11:
            this.shape = [0,2,0,1,1,1,2,2];
            this.color = "#990000";
            this.center = [1,1];
            break;
        case -10:
            this.shape = [0,0,0,1,1,1,2,0];
            this.color = "#990099";
            this.center = [1,1];
            break;
        case -9:
            this.shape = [0,2,0,1,1,1,2,0];
            this.color = "#009999";
            this.center = [1,1];
            break;
        case -8:
            this.shape = [0,0,0,1,1,1,2,2];
            this.color = "#009900";
            this.center = [1,1];
            break;
        case -7:
            this.shape = [1,0,1,1,1,2,0,3];
            this.color = "#999900";
            this.center = [0.5,2.5];
            break;
        case -6:
            this.shape = [0,0,0,1,0,2,1,3];
            this.color = "magenta";
            this.center = [0.5,2.5];
            break;
        case -5:
            this.shape = [0,0,1,1,0,2];
            this.color = "#009999";
            this.center = [0.5,0.5];
            break;
        case -4:
            this.shape = [0,0,1,1,2,2];
            this.color = "purple";
            this.center = [1,1];
            break;
        case -3:
            this.shape = [1,0,0,1,0,2];
            this.color = "red";
            this.center = [0.5,0.5];
            break;
        case -2:
            this.shape = [0,0,1,1,1,2];
            this.color = "green";
            this.center = [0.5,0.5];
            break;
        case -1:
            this.shape = [0,0,1,1];
            this.color = "orange";
            this.center = [0.5,0.5];
            break;
        case 0:
            this.shape = [0,0];
            this.color = "cyan";
            this.center = [0,0];
            break;
        case 1:
            this.shape = [0,0,0,1];
            this.color = "cyan";
            this.center = [0,0];
            break;
        case 2:
            this.shape = [0,0,0,1,0,2];
            this.color = "cyan";
            this.center = [0,1];
            break;
        case 3:
            this.shape = [0,0,0,1,1,1];
            this.color = "orange";
            this.center = [0.5,0.5];
            break;
        case 4:
            this.shape = [0,0,0,1,0,2,0,3]; // Line Block
            this.color = "cyan";
            this.center = [0,2];
            break;
        case 5:
            this.shape = [0,0,0,1,0,2,1,2]; // L Block
            this.color = "blue";
            this.center = [0.5,1.5];
            break;
        case 6:
            this.shape = [1,0,1,1,1,2,0,2]; // Inverse L Block
            this.color = "orange";
            this.center = [0.5,1.5];
            break;
        case 7:
            this.shape = [0,0,0,1,0,2,1,1]; // T Block
            this.color = "purple";
            this.center = [0,1];
            break;
        case 8:
            this.shape = [0,0,0,1,1,1,1,2]; // Z Block
            this.color = "green";
            this.center = [0.5,1.5];
            break;
        case 9:
            this.shape = [1,0,1,1,0,1,0,2]; // Inverse Z Block
            this.color = "red";
            this.center = [0.5,1.5];
            break;
        case 10:
            this.shape = [0,0,0,1,1,0,1,1]; // Square Block
            this.color = "yellow";
            this.center = [0.5,0.5];
            break;
        case 11:
            this.shape = [0,0,0,1,0,2,0,3,0,4];
            this.color = "cyan";
            this.center = [0,3];
            break;
        case 12:
            this.shape = [0,0,0,1,0,2,0,3,1,3];
            this.color = "blue";
            this.center = [0.5,2.5];
            break;
        case 13:
            this.shape = [1,0,1,1,1,2,1,3,0,3];
            this.color = "orange";
            this.center = [0.5,2.5];
            break;
        case 14:
            this.shape = [0,0,0,1,0,2,1,2,2,2];
            this.color = "magenta";
            this.center = [0.5,1.5];
            break;
        case 15:
            this.shape = [0,0,0,1,1,0,1,1,0,2];
            this.color = "yellow";
            this.center = [0.5,0.5];
            break;
        case 16:
            this.shape = [0,0,0,1,1,0,1,1,1,2];
            this.color = "purple";
            this.center = [0.5,0.5];
            break;
        case 17:
            this.shape = [0,0,0,1,1,1,0,2,0,3];
            this.color = "gray";
            this.center = [0,1];
            break;
        case 18:
            this.shape = [0,0,0,1,0,2,1,2,0,3];
            this.color = "white";
            this.center = [0,2];
            break;
        case 19:
            this.shape = [0,0,2,0,0,1,1,1,2,1];
            this.color = "green";
            this.center = [0.5,0.5];
            break;
        case 20:
            this.shape = [0,0,1,0,1,1,2,1,2,2];
            this.color = "red";
            this.center = [1,1];
            break;
        case 21:
            this.shape = [0,0,1,0,1,1,1,2,2,2];
            this.color = "pink";
            this.center = [1,1];
            break;
        case 22:
            this.shape = [0,0,1,0,1,1,2,1,1,2];
            this.color = "#AAFF00";
            this.center = [1,1];
            break;
        case 23:
            this.shape = [1,0,2,0,0,1,1,1,1,2];
            this.color = "#009900";
            this.center = [1,1];
            break;
        case 24:
            this.shape = [1,0,0,1,1,1,0,2,0,3];
            this.color = "#EEAAEE";
            this.center = [0.5,1.5];
            break;
        case 25:
            this.shape = [0,0,0,1,1,1,1,2,1,3];
            this.color = "#AAEEAA";
            this.center = [0.5,1.5];
            break;
        case 26:
            this.shape = [0,0,1,0,2,0,1,1,1,2];
            this.color = "#550099";
            this.center = [1,0];
            break;
        case 27:
            this.shape = [0,1,1,0,1,1,1,2,2,1];
            this.color = "#990055";
            this.center = [1,1];
            break;
        case 28:
            this.shape = [2,0,1,0,1,1,1,2,0,2];
            this.color = "#CCEEDD";
            this.center = [1,1];
            break;
        case 29:
            this.shape = [0,0,0,1,0,2,0,3,0,4,0,5];
            this.color = "cyan";
            this.center = [0,3];
            break;
        case 30:
            this.shape = [0,0,0,1,0,2,0,3,0,4,1,4];
            this.color = "orange";
            this.center = [0.5,3.5];
            break;
        case 31:
            this.shape = [1,0,1,1,1,2,1,3,0,4,1,4];
            this.color = "blue";
            this.center = [0.5,3.5];
            break;
        case 32:
            this.shape = [1,0,1,1,1,2,1,3,0,3,1,4];
            this.color = "magenta";
            this.center = [1,3];
            break;
        case 33:
            this.shape = [0,0,0,1,0,2,1,3,0,3,0,4];
            this.color = "pink";
            this.center = [0,3];
            break;
        case 34:
            this.shape = [0,0,0,1,0,2,1,2,0,3,0,4];
            this.color = "purple";
            this.center = [0,2];
            break;
        case 35:
            this.shape = [1,0,1,1,1,2,1,3,0,3,0,4];
            this.color = "red";
            this.center = [0.5,3.5];
            break;
        case 36:
            this.shape = [0,0,0,1,0,2,0,3,1,3,1,4];
            this.color = "green";
            this.center = [0.5,3.5];
            break;
        case 37:
            this.shape = [0,0,1,0,0,1,1,1,0,2,0,3];
            this.color = "yellow";
            this.center = [1,1];
            break;
        case 38:
            this.shape = [0,0,1,0,0,1,1,1,1,2,1,3];
            this.color = "#999900";
            this.center = [1,1];
            break;
        case 39:
            this.shape = [0,0,1,0,0,1,0,2,1,2,0,3];
            this.color = "#553300";
            this.center = [0.5,1.5];
            break;
        case 40:
            this.shape = [0,0,0,1,1,1,0,2,0,3,1,3];
            this.color = "#CC9977";
            this.center = [0.5,0.5];
            break;
        case 41:
            this.shape = [0,0,1,0,0,1,0,2,0,3,1,3];
            this.color = "#003355";
            this.center = [0.5,1.5];
            break;
        case 42:
            this.shape = [0,0,0,1,1,1,0,2,1,2,0,3];
            this.color = "#330055";
            this.center = [0.5,1.5];
            break;
        case 43:
            this.shape = [0,0,0,1,0,2,0,3,1,3,2,3];
            this.color = "#885500";
            this.center = [0.5,2.5];
            break;
        case 44:
            this.shape = [2,0,2,1,2,2,0,3,1,3,2,3];
            this.color = "#005588";
            break;
        case 45:
            this.shape = [0,0,0,1,0,2,0,3,1,2,2,2];
            this.color = "#880055";
            this.center = [0.5,1.5];
            break;
        case 46:
            this.shape = [2,0,2,1,2,2,0,2,1,2,2,3];
            this.color = "#550088";
            this.center = [1.5,1.5];
            break;
        case 47:
            this.shape = [0,0,1,0,1,1,1,2,1,3,2,0];
            this.color = "#CC99FF";
            this.center = [1,0];
            break;
        case 48:
            this.shape = [1,0,2,0,0,1,1,1,1,2,1,3];
            this.color = "#008800";
            this.center = [1.5,1.5];
            break;
        case 49:
            this.shape = [1,0,0,0,2,1,1,1,1,2,1,3];
            this.color = "#88DD88";
            this.center = [1.5,1.5];
            break;
        case 50:
            this.shape = [1,0,2,0,0,2,1,1,1,2,1,3];
            this.color = "#000088";
            this.center = [1.5,2.5];
            break;
        case 51:
            this.shape = [1,0,0,0,2,2,1,1,1,2,1,3];
            this.color = "#8888DD";
            this.center = [1.5,2.5];
            break;
        case 52:
            this.shape = [1,0,2,0,1,1,1,2,1,3,0,3];
            this.color = "#550000";
            this.center = [1,2];
            break;
        case 53:
            this.shape = [1,0,0,0,1,1,1,2,1,3,2,3];
            this.color = "#EE9999";
            this.center = [1,2];
            break;
        case 54:
            this.shape = [1,0,0,1,1,1,1,2,2,2,1,3];
            this.color = "#0099CC";
            this.center = [1,2];
            break;
        case 55:
            this.shape = [1,0,2,1,1,1,1,2,0,2,1,3];
            this.color = "#CCEEFF";
            this.center = [1,2];
            break;
        case 56:
            this.shape = [1,0,0,1,1,1,2,1,1,2,1,3];
            this.color = "#FFBB55";
            this.center = [1,1];
            break;
        case 57:
            this.shape = [1,0,0,1,1,1,2,1,0,2,0,3];
            this.color = "#FF5500";
            this.center = [1,1];
            break;
        case 58:
            this.shape = [1,0,0,1,1,1,2,1,2,2,2,3];
            this.color = "#BB3300";
            this.center = [1,1];
            break;
        case 59:
            this.shape = [1,0,0,1,1,1,0,2,0,3,1,3];
            this.color = "#990000";
            this.center = [0.5,0.5];
            break;
        case 60:
            this.shape = [0,0,1,1,0,1,1,2,1,3,0,3];
            this.color = "#330000";
            this.center = [0.5,0.5];
            break;
        case 61:
            this.shape = [0,0,0,1,0,2,1,2,1,3,1,4];
            this.color = "#003300";
            this.center = [0.5,2.5];
            break;
        case 62:
            this.shape = [1,0,1,1,1,2,0,2,0,3,0,4];
            this.color = "#330033";
            this.center = [0.5,2.5];
            break;
        case 63:
            this.shape = [0,0,0,1,0,2,1,1,1,2,1,3];
            this.color = "#DDDDDD";
            this.center = [0.5,1.5];
            break;
        case 64:
            this.shape = [1,0,1,1,1,2,0,1,0,2,0,3];
            this.color = "#999999";
            this.center = [0.5,1.5];
            break;
        case 65:
            this.shape = [0,0,0,1,1,0,1,1,2,0,2,1];
            this.color = "#99EE00";
            this.center = [0.5,0.5];
            break;
        case 66:
            this.shape = [2,0,0,1,1,1,2,1,1,2,1,3];
            this.color = "#333333";
            this.center = [1,1];
            break;
        case 67:
            this.shape = [0,0,0,1,1,1,2,1,1,2,1,3];
            this.color = "#555555";
            this.center = [1,1];
            break;
        case 68:
            this.shape = [0,0,1,0,2,0,1,1,2,1,1,2];
            this.color = "#CCCC00";
            this.center = [1,1];
            break;
        case 69:
            this.shape = [0,0,1,0,2,0,1,1,0,1,1,2];
            this.color = "#555500";
            this.center = [1,1];
            break;
        case 70:
            this.shape = [2,0,2,1,1,1,1,2,0,2,1,3];
            this.color = "#0000DD";
            this.center = [2,2];
            break;
        case 71:
            this.shape = [0,0,0,1,1,1,1,2,2,2,1,3];
            this.color = "#00DDDD";
            this.center = [2,2];
            break;
        case 72:
            this.shape = [2,0,0,1,1,1,2,1,0,2,0,3];
            this.color = "#FFBB00";
            this.center = [1.5,1.5];
            break;
        case 73:
            this.shape = [0,0,0,1,1,1,2,1,2,2,2,3];
            this.color = "#BBFF00";
            this.center = [1.5,1.5];
            break;
        case 74:
            this.shape = [2,0,0,1,1,1,1,0,0,2,0,3];
            this.color = "#DDBB00";
            this.center = [1.5,1.5];
            break;
        case 75:
            this.shape = [0,0,1,0,1,1,1,2,2,2,2,3];
            this.color = "#BBDD00";
            this.center = [1.5,1.5];
            break;
        case 76:
            this.shape = [0,0,1,0,2,0,0,1,2,1,0,2];
            this.color = "#00DDBB";
            this.center = [1,1];
            break;
        case 77:
            this.shape = [0,0,1,0,2,0,0,1,2,1,2,2];
            this.color = "#00BBDD";
            this.center = [1,1];
            break;
        case 78:
            this.shape = [0,0,1,1,2,0,0,1,2,1,0,2];
            this.color = "#009977";
            this.center = [1,1];
            break;
        case 79:
            this.shape = [0,0,1,1,2,0,0,1,2,1,2,2];
            this.color = "#007799";
            this.center = [1,1];
            break;
        case 80:
            this.shape = [0,0,2,0,0,1,1,1,2,1,1,2];
            this.color = "#FFFFFF";
            this.center = [1,1];
            break;
        case 81:
            this.shape = [1,0,2,0,1,1,0,2,1,2,0,3];
            this.color = "#880088";
            this.center = [1,1];
            break;
        case 82:
            this.shape = [1,0,0,0,1,1,2,2,1,2,2,3];
            this.color = "#550055";
            this.center = [1,1];
            break;
        case 83:
            this.shape = [0,0,0,1,1,1,0,2,1,2,2,2];
            this.color = "#EE99EE";
            this.center = [1,1];
            break;
        case 84:
            this.shape = [1,0,0,1,1,1,2,1,0,2,1,2];
            this.color = "#BB44EE";
            this.center = [1,1];
            break;
        case 85:
            this.shape = [2,0,0,1,1,1,2,1,0,2,1,2];
            this.color = "#EE6633";
            this.center = [1,1];
            break;
        case 86:
            this.shape = [0,0,0,1,1,1,2,1,2,2,1,2];
            this.color = "#BB2200";
            this.center = [1,1];
            break;
        case 87:
            this.shape = [0,0,0,1,1,1,2,1,2,2,2,3];
            this.color = "#3355FF";
            this.center = [1,1];
            break;
        case 88:
            this.shape = [2,0,2,1,1,1,0,1,0,2,0,3];
            this.color = "#5533FF";
            this.center = [1,1];
            break;
        
        default:
            break;
    }
    return this;
}