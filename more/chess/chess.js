var grid = []

function Chess() {

    var bBiship =   loadImage('sprites/blackBishop.png')
    var bKing   =   loadImage('sprites/blackKing.png')
    var bKnight =   loadImage('sprites/blackKnight.png')
    var bPawn   =   loadImage('sprites/blackPawn.png')     
    var bQueen  =   loadImage('sprites/blackQueen.png')
    var bRook   =   loadImage('sprites/blackRook.png')

    var wBiship =   loadImage('sprites/whiteBishop.png')
    var wKing   =   loadImage('sprites/whiteKing.png')
    var wKnight =   loadImage('sprites/whiteKnight.png')
    var wPawn   =   loadImage('sprites/whitePawn.png')     
    var wQueen  =   loadImage('sprites/whiteQueen.png')
    var wRook   =   loadImage('sprites/whiteRook.png')
    

    this.setup = function(){
        grid = [
            ['bR1','bN','bB','bQ','bK','bB','bN','bR2'],
            ['bP1','bP1','bP1','bP1','bP1','bP1','bP1','bP1'],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            ['wP1','wP1','wP1','wP1','wP1','wP1','wP1','wP1'],
            ['wR1','wN','wB','wQ','wK','wB','wN','wR2']
            ]

        for (let i = 0; i < 8; i++){
            var p = createSprite(50+100*i,150,100,100)
            p.addImage(bPawn)
            p.mouseActive = true;
            blacks.add(p)

            var q = createSprite(50+100*i,650,100,100)
            q.addImage(wPawn)
            q.mouseActive = true;
            whites.add(q)
        }

        let b = [bRook, bKnight, bBiship, bQueen, bKing, bBiship, bKnight, bRook]
        let w = [wRook, wKnight, wBiship, wQueen, wKing, wBiship, wKnight, wRook]

        for(let i = 0; i < 8; i++){
            var p = createSprite(50+100*i,50,100,100)
            p.addImage(b[i])
            p.mouseActive = true;
            blacks.add(p)

            var q = createSprite(50+100*i,750,100,100)
            q.addImage(w[i])
            q.mouseActive = true;
            whites.add(q)
        }

    }
}

whichSquare = function(x,y){
    x = parseInt(x/100, 10);
    y = parseInt(y/100, 10);

    return [x,y];
}

whichGrid = function(x,y){
    return [parseInt(y/100, 10),parseInt(x/100, 10)];
}

gridVal = function(x,y){
    locs = whichGrid(x,y);
    return gird[locs[0]][locs[1]];
}

checkMove = function(loc1, loc2, a, b){
    let valid = false;

    if(loc1 instanceof Array){
        var x1 = loc1[0];
        var y1 = loc1[1];
        var x2 = loc2[0];
        var y2 = loc2[1];
    } else {
        var x1 = loc1;
        var y1 = loc2;
        var x2 = a;
        var y2 = b;
    }
    
    let piece = grid[y1][x1];

    let gridLoc = whichGrid(x1,y1);
    let newLoc = whichGrid(x2,y2);

    if(piece == 0){

    } else if(piece.charAt(1) == 'P'){
        let dir = 0;
        if(piece.charAt(0) == 'w'){
            dir = -1;
        } else {
            dir = 1;
        }

        if((y2 - y1) == dir){
            if(x2 - x1 == 0){
                if(grid[y2][x2] == 0){
                    valid = true;
                    grid[y1][x1] = 0;
                    grid[y2][x2] = piece.replaceAt(2, '2');
                }
            } else if (Math.abs(x2 - x1) == 1){
                if(grid[y2][x2] != 0){
                    valid = true;
                    grid[y1][x1] = 0;
                    grid[y2][x2] = piece.replaceAt(2, '2');
                }
            }
        } else if (((y2 - y1) == dir*2) && (piece.charAt(2) == '1')){
            if(x2 - x1 == 0){
                if(grid[y2][x2] == 0 && grid[y2-dir][x2] == 0){
                    valid = true;
                    grid[y1][x1] = 0;
                    grid[y2][x2] = piece.replaceAt(2, '2');
                }
            }
        } 
    }

    if(valid){
        //console.log("valid");
    } else {
        //console.log("invalid");
    }

    return valid;
}


String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}