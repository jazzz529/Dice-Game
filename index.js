// Rolling Dice 1

var randomNumber1 = Math.floor((Math.random()) * 6) + 1;

var randomImageName1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomImageName1;

var player1 = document.querySelector(".img1").setAttribute("src", randomImageSource1);

// Rolling Dice 2

var randomNumber2 = Math.floor((Math.random()) * 6) + 1;

var randomImageName2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImageName2;

var player2 = document.querySelector(".img2").setAttribute("src", randomImageSource2);


// Identifying Winner

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!!!";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!!!";
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "! Match Draw !";
}

