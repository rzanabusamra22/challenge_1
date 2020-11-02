//turn
var turn = document.getElementById("turn")
//boxes
var boxes = document.querySelectorAll(".container")
//box
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")
//X O initail value 0 picked 1S
var X_or_O = 0;

//the pissiable winning combinations 
//Horizantal 
//[1,2,3] , [4,5,6] , [7,8,9] 
//Vertical 
//[1,4,7] , [2,5,8] , [3,6,9] 
//Diagonal 
//[1,5,9] , [3,5,7] 
function selectWinnerBoxes(b1, b2, b3) {

}

function getWinner() {
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) { selectWinnerBoxes(box1, box2, box3) }
    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) { selectWinnerBoxes(box4, box5, box6) }
}
//event listenner on click
