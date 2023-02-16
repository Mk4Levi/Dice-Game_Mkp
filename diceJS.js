// document.querySelector("button").onclick = eventHandler;
// now above by using addEventListener :-
document.querySelector("button").addEventListener("click", eventHandler);
function eventHandler() {
    location.reload();
}

let diceNum1 = Math.random() * 5 ;
diceNum1 = Math.round(diceNum1) + 1 ;

// console.log(diceNum1);

if (diceNum1 == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (diceNum1 == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (diceNum1 == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (diceNum1 == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (diceNum1 == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (diceNum1 == 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

let diceNum2 = Math.random() * 5;
diceNum2 = Math.round(diceNum2) + 1;

// console.log(diceNum2);

if (diceNum2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (diceNum2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (diceNum2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (diceNum2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (diceNum2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (diceNum2 == 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

//

if (diceNum1 == 6) {
    document.querySelector("#result").innerHTML = "Player-1 is the WINNER";
} else if (diceNum2 == 6) {
    document.querySelector("#result").innerHTML = "Player-2 is the WINNER";
}
