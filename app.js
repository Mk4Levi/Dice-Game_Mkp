// for reloading 
document.querySelector("button").addEventListener("click", reloadFunct);
function reloadFunct() {
    location.reload();
}


// for Dice-1
let randomNum1 = Math.round(Math.random() * 5) + 1;

let randomImgSrc = "images/dice" + randomNum1 + ".png";

let image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImgSrc);


// for Dice-2
let randomNum2 = Math.round(Math.random() * 5) + 1;

let randomImgSrc2 = "images/dice" + randomNum2 + ".png";

let image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImgSrc2);


// output result :-
if (randomNum1 > randomNum2) {
  document.querySelector("#result").innerHTML = "🚗🚗 Player-1 is the WINNER";
} 
else if (randomNum2 > randomNum1) {
  document.querySelector("#result").innerHTML = "Player-2 is the WINNER 🚚🚚";
} 
else {
  document.querySelector("#result").innerHTML = "🕵️‍♀️ It's a Draw, Try Again 🕵️‍♀️";
}
