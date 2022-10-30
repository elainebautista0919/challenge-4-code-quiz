// Jamie Morris Homework-4 Code Quiz 
// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear the scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retrieve the local storage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to main page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});