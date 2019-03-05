
// Create a random # that is going to return a value between 1 & 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

// Concatenate random # to the end of the string dice and .png 
// return a string from dice1.png - dice6.png 
var randomDiceImage = "dice" + randomNumber1 + ".png"; 

// Use string from line 7 to change the source of our image using concatenation 
// return images/dice1.png - images/dice6.png 
var randomImageSource = "images/" + randomDiceImage;

// Select all the image tags and store it in a var. Use index 0 to select first img.
var image1 = document.querySelectorAll("img")[0];

// Use the querySelectorAll method to set attribute for image 1
// parameters in parenthesis 
image1.setAttribute("src", randomImageSource);

// Do the same for right hand side image element.
// returns string from dice1.png - dice.png 
var randomNumber2 = Math.floor(Math.random()* 6) + 1;

// Use string from line 21 and concatenate lines 7 and 11 to create 2nd image source 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Use the querySelectorAll method to set attribute for image 2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player one wins 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
