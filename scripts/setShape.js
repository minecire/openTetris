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
            this.center = [0.5,3.5];
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
        default:
            break;
    }
    return this;
}