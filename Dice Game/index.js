var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var imageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var imageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}

else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
}