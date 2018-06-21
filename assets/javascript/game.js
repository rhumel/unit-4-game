$(document).ready(function() {

var lowGoal = 19;
var highGoal= 102;
var lowFlw = 1;
var highFlw =12;
var wins = 0;
var loss = 0;
var goalNumber = 0;
var total = 0;
var flower = [
pink = 0,
orange = 0,
purple = 0,
aqua = 0
]


function reset() {
    var goalNumber = 0;
    var total = 0;
    var flower = [
    pink = 0,
    orange = 0,
    purple = 0,
    aqua = 0
    ]
    
}
//call the reset function to 
reset();

// a random Goal number
goalNumber = randomNumber(highGoal, lowGoal);
$("#goal").text(goalNumber);


// get random number between 1 and 12 for each flower
for (var i = 0; i < 4; i++) {
    flower[i] = randomNumber(highFlw,lowFlw);
    console.log(flower[i]);
}

$("#pink").on("click", function() {
    if (total===goalNumber) {
        win();
    }else if (total > goalNumber) {
        lose();
    }else {
        counter += pink;
        $("total").text(counter);
    }
    
});

$("#orange").on("click", function(){
    if (total===goalNumber) {
        win();
    }else if (total > goalNumber) {
        lose();
    }else {
        counter += orange;
        $("total").text(counter);
    }
    
});


$("#purple").on("click", function(){
    if (total===goalNumber) {
        win();
    }else if (total > goalNumber) {
        lose();
    }else {
        counter += purple;
        $("total").text(counter);
    }
    
});


$("#aqua").on("click", function(){
    if (total===goalNumber) {
        win();
    }else if (total > goalNumber) {
        lose();
    }else {
        counter += aqua;
        $("total").text(counter);
    }
    
});



function randomNumber(max,min) {

    return((Math.floor(Math.random() *max) + min));
}

function win() {
    win++;
    $("#win-loss").text("You Won!!");
}

function lose() {
    loss++;
    $("#win-loss").text("Try Again!!");
}

});
