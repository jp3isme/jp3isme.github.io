console.log("added js")
var puzzle = []
var anim = false

document.getElementById("reset").addEventListener("click", function(){
    resetPuzzles();
})

document.getElementById("submit").addEventListener("click", function(){
    if (confirm('Animate solution? (cancel still solves)')) {
        anim = true
    } else {
        anim = false
    }
    solve();
})


let solve = function(){
    
    let found = 0;
    puzzle = []

    for(let r = 0; r < 9; r++){
        var row = []
        for(let c = 0; c < 9; c++){
            let val = document.getElementById('in').rows[r].cells[c].children[0].value
            val = Number(val)
            console.log(val)
            var cell = [val]

            if(val == 0){
                cell.push([1,1,1,1,1,1,1,1,1])
            } else {
                found++
            }

            row.push(cell)
        }
        puzzle.push(row)
    }

    console.log(puzzle)

    let changed = true
    let empty = true
    let count = 0

    while(true){
        if(!changed){
            alert("No solution found")
            finishPuzzle()
            console.log(count)
            break;
        }
        count++

        changed = false
        empty = false

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                if(puzzle[r][c][0] == 0){
                    empty = true
                    if(check(r,c)){
                        changed = true
                    }
                }
                if(anim){
                    console.log("sleeping")
                    sleep(50)
                }
                if(changed){
                    updatePuzzle()
                }
            }
        }

        if(!empty){
            alert("Puzzle Solved");
            finishPuzzle()
            console.log(puzzle)
            console.log(count)
            break;
        }
    }

    updatePuzzle();

}

let check = function(r,c){
    let changed = false

    for(let n = 1; n < 10; n++){
        if(puzzle[r][c][1][n-1] !== 0){
            let cR = checkRow(r,n,c)
            let cC = checkCol(c,n,r)
            let cS = checkSquare(r,c,n)
            if(cR == -1 || cC == -1|| cS == -1){
                puzzle[r][c][1][n-1] = 0;
                changed = true
            } else if (cR == -3){
                puzzle[r][c][0] = n
                changed = true
            } else if (cC == -3){
                puzzle[r][c][0] = n
            } else if (cS == -3){
                puzzle[r][c][0] = n
                changed = true
            }
        }
    }

    let count = 0;
    let val = 0;
    for(let n = 1; n < 10; n++){
        if(puzzle[r][c][1][n-1] !== 0){
            val = n
            count++
        }
    }

    if(count == 1){
        puzzle[r][c][0] = val
    }

    return changed;
}

let whichSquare = function(r,c){
    if(r < 3){
        if(c < 3){
            return 0
        } else if (c < 6){
            return 1
        } else {
            return 2
        }
    } else if(r < 6){
        if(c < 3){
            return 3
        } else if (c < 6){
            return 4
        } else {
            return 5
        }
    } else {
        if(c < 3){
            return 6
        } else if (c < 6){
            return 7
        } else {
            return 8
        }
    }
}

let checkRow = function(r,n,col){
    mustBe = true;

    for(let c = 0; c < 9; c++){
        if(puzzle[r][c][0] == n){
            return -1;
        } else if (c != col && puzzle[r][c][0] == 0){
            if(puzzle[r][c][1][n-1] == 1){
                mustBe = false;
            }
        }
    }
    if(mustBe){
        return -3
    }
    return -2
}

let checkCol = function(c,n,row){
    mustBe = true;
    
    for(let r = 0; r < 9; r++){
        if(puzzle[r][c][0] == n){
            return -1;
        } else if (r != row && puzzle[r][c][0] == 0){
            if(puzzle[r][c][1][n-1] == 1){
                mustBe = false;
            }
        }
    }
    if(mustBe){
        return -3
    }
    return -2
}

let checkSquare = function(row,col,n){
    mustBe = true;
    
    let s = whichSquare(row,col)

    if(s < 3){
        for(let r = 0; r < 3; r++){
            if(s == 0){
                for(let c = 0; c < 3; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 1){
                for(let c = 3; c < 6; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 2){
                for(let c = 6; c < 9; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            }
        }
    } else if(s < 6){
        for(let r = 3; r < 6; r++){
            if(s == 3){
                for(let c = 0; c < 3; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 4){
                for(let c = 3; c < 6; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 5){
                for(let c = 6; c < 9; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            }
        }
    } else if(s < 9){
        for(let r = 6; r < 9; r++){
            if(s == 6){
                for(let c = 0; c < 3; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 7){
                for(let c = 3; c < 6; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            } else if (s == 8){
                for(let c = 6; c < 9; c++){
                    if(puzzle[r][c][0] == n){
                        return -1;
                    } else if (puzzle[r][c][0] == 0 && !(r == row && c == col)){
                        if(puzzle[r][c][1][n-1] == 1){
                            mustBe = false;
                        }
                    }
                }
            }
        }
    }
    if(mustBe){
        return -3
    }
    return -2
}

let updatePuzzle = function(){
    console.log("updating")
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            document.getElementById('out').rows[r].cells[c].innerHTML = puzzle[r][c][0]
            if(puzzle[r][c][0] == 0){
                document.getElementById('out').rows[r].cells[c].innerHTML = " "
            }
        }
    }
}

let finishPuzzle = function(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            if(puzzle[r][c][0] == 0){
                document.getElementById('out').rows[r].cells[c].style.backgroundColor = "red"
            }
        }
    }
}

let resetPuzzles = function(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let s = whichSquare(r,c)
            if(s == 0 || s == 2 || s == 4 || s == 6 || s == 8){
                color = "#dbdbdb"
            } else {
                color = "white"
            }

            document.getElementById('in').rows[r].cells[c].children[0].value = ""
            document.getElementById('out').rows[r].cells[c].innerHTML = ""            
            
            document.getElementById('in').rows[r].cells[c].children[0].style.backgroundColor = color
            document.getElementById('out').rows[r].cells[c].style.backgroundColor = color
        }
    }
}

let sleep = function(miliseconds) {
    var currentTime = new Date().getTime();
    var newTime = new Date().getTime();
 
    while (currentTime + miliseconds >= (newTime = new Date().getTime())) {
        //console.log(currentTime + miliseconds + " pause until")
        //console.log(newTime + " current")
    }
 }

resetPuzzles();