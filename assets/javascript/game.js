// -------PSEUDO CODE------- \\
// each gem has an array of numbers
// each gem will be assigned a random number from their array. You will not know what the number is until you click on the gem.
// there will be a random number in the "Get This Number" box from a number array.
// when you click on a gem, their number will be added to your total score.
// If your total score surpasses the computer's random number, you lose, you'll be alerted that you lost, your LOSE count will increase by 1, and then the game will restart.
// If your total score is equal to the computer's random number, you win, you'll be alerted that you won, your WIN count will increase by 1, and then the game will restart.
// whenever a new game starts, each gem will restart with a different random number from their array, the computer will give you another random number from the number array, and your total score will be 0. 

// Functions and Values

var blueGem = Math.floor(Math.random()*23)+5;
    console.log("Blue Gem: " + blueGem);
var greenGem = Math.floor(Math.random()*27)+1;
    console.log("Green Gem: " + greenGem);
var redGem = Math.floor(Math.random()*12)+3;
    console.log("Red Gem: " + redGem);
var yellowGem = Math.floor(Math.random()*15)+1
    console.log("Yellow Gem: " + yellowGem);
var randomNum = Math.floor(Math.random()*250)+30;
    console.log("Random Number: " + randomNum);
    $("#randomNum").text(randomNum);

var win= 0;
var lose= 0;
var totalScore= 0;

function reset() {
    // keeping track of how many wins and losses you have
    console.log("Wins: "+win);
    console.log("Losses: "+lose);
    // -------------------------------
    var blueGem = Math.floor(Math.random()*23)+5;
    console.log("Blue Gem: " + blueGem);
    greenGem = Math.floor(Math.random()*27)+1;
    console.log("Green Gem: " + greenGem);
    redGem = Math.floor(Math.random()*12)+3;
    console.log("Red Gem: " + redGem);
    yellowGem = Math.floor(Math.random()*15)+1
    console.log("Yellow Gem: " + yellowGem);
    randomNum = Math.floor(Math.random()*250)+30;
    console.log("Random Number: " + randomNum);
    totalScore=0;
};
$("#blue-gem").click(function(){
    var newScore = score + blueGem;
    console.log("Score Total: " + newScore);
    $("#scoreDisplay").html(newScore);
})