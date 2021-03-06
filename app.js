//Turn 
var turn = document.getElementById("turn");
//Boxes
var boxes = document.querySelectorAll("#main div")
//Box
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var X_or_O = 0;
var winCount = 0;

function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    turn.innerHTML = b1.innerHTML + " WON";
    winCount += 1;
}
//winning combinations posibilites
//Horizantal 
//[1,2,3] , [4,5,6] , [7,8,9] 
//Vertical 
//[1,4,7] , [2,5,8] , [3,6,9] 
//Diagonal 
//[1,5,9] , [3,5,7]
function getWinner() {
    //Horizantal 
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) { selectWinnerBoxes(box1, box2, box3); }
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) { selectWinnerBoxes(box4, box5, box6); }
    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) { selectWinnerBoxes(box7, box8, box9); }
    //Vertical 
    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) { selectWinnerBoxes(box1, box4, box7); }
    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) { selectWinnerBoxes(box2, box5, box8); }
    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) { selectWinnerBoxes(box3, box6, box9); }
    //Diagonal 
    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) { selectWinnerBoxes(box1, box5, box9); }
    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) { selectWinnerBoxes(box3, box5, box7); }
}

// onClick event 
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (X_or_O != 8 && winCount === 0) {
            if (this.innerHTML !== "X" && this.innerHTML !== "O") {
                if (X_or_O % 2 === 0) {
                    console.log(X_or_O);
                    this.innerHTML = "X";
                    turn.innerHTML = "O Turn Now";
                    getWinner();
                    X_or_O += 1;
                } else {
                    console.log(X_or_O);
                    this.innerHTML = "O";
                    turn.innerHTML = "X Turn Now";
                    getWinner();
                    X_or_O += 1;
                }
            }
        } else if (winCount === 0 && X_or_O == 8) {
            turn.innerHTML = "tie try again ";
        } else {
            replay()
            location.reload()
        }
    };
}
//to reset || a new game
function replay() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";
        turn.innerHTML = "Play";
        X_or_O = 0;
        winCount = 0;
    }
}
