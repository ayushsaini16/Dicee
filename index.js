var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomImage = "dice" + randomNumber + ".png";

var randomImageSource = "images/" + randomImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource2 = "images/" + randomImage1;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber < randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "🎌Draw";
}
