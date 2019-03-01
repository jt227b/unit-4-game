// Game design notes //

/* The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.    */


// Let's Get Started //

$(document).ready(function () {


    // Variable for the Game//
    var randomNumbers = 0;
    var wins = 0;
    var losses = 0;
    var totalScores = 0;

    // Variables for Characters //
    var crystalMike = 0;
    var crystalJesse = 0;
    var crystalWhite = 0;
    var crystalSaul = 0;

    // Random Functions //

    function initializeGame() {
        randomNumbers = Math.floor(Math.random() * 120) + 10;
        crystalMike = Math.floor(Math.random() * 12) + 1;
        crystalJesse = Math.floor(Math.random() * 12) + 1;
        crystalWhite = Math.floor(Math.random() * 12) + 1;
        crystalSaul = Math.floor(Math.random() * 12) + 1;

        // JQuery uses $ //
        $("#random-number").text(randomNumbers);
        $("#mike").attr("data-crystalvalue", crystalMike);
        $("#jesse").attr("data-crystalvalue", crystalJesse);
        $("#white").attr("data-crystalvalue", crystalWhite);
        $("#saul").attr("data-crystalvalue", crystalSaul);
        totalScores = 0;
        $("#total-score").empty();
    }
    // Start Game //
    initializeGame();

    $(".crystalBox").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        totalScores += crystalValue
        $("#total-score").text(totalScores);

        //  If, Else Statements  //
        if (totalScores === randomNumbers) {
            alert("We're Done When I Say We're Done... You Win!");
            wins++;
            $("#win-counter").text(wins);
            initializeGame();
        }

        else if (totalScores >= randomNumbers) {
            alert("Say My Name... You Lose!");
            losses++;
            $("#loss-counter").text(losses);
            initializeGame();
        }

    })




})
