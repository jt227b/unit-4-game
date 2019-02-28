// Game design notes //

/* The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.    */




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

function initializeGame(){
    randomNumbers = Math.floor(Math.random() * 120) + 10;
    
}


