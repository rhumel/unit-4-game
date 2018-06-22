$(document).ready(function() {

var lowGoal = 19;
var highGoal= 102;
var lowFlw = 1;
var highFlw =12;
var counter = 0;
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
    var counter = 0;
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

console.log(total);
$("#pink").on("click", function() {
        
     if (total < goalNumber) {
        console.log(flower[0],total);
        total += flower[0];
        $("#total").text(total); 
     }      
    if (total===goalNumber) {
        win();
    } 
    if (total > goalNumber) {
        lose();
    }   
});


$("#orange").on("click", function() {
    
    
     if (total < goalNumber) {
        console.log(flower[1],total);
        total += flower[1];
        $("#total").text(total); 
     }      
    if (total===goalNumber) {
        win();
    } 
    if (total > goalNumber) {
        lose();
    }   
});

$("#purple").on("click", function() {
    console.log("clicked")
    
     if (total < goalNumber) {
        console.log(flower[2],total);
        total += flower[2];
        $("#total").text(total); 
     }      
     if (total===goalNumber) {
         win();
     } 
     if (total > goalNumber) {
         lose();
     }   
});

$("#aqua").on("click", function() {
    console.log("clicked")
    
     if (total < goalNumber) {
        console.log(flower[3],total);
        total += flower[3];
        $("#total").text(total); 
     }      
    if (total===goalNumber) {
    
        win();
    } 
    if (total > goalNumber) {
        lose();
    }   
});

    
    // if (total===goalNumber) {
    //     win();
    // } 
    // if (total > goalNumber) {
    //     lose();
    // }



function randomNumber(max,min) {

    return((Math.floor(Math.random() *max) + min));
}

function win() {
  
    wins++;
    console.log(wins);
    $("#wins").text(wins);
    $("#win-loss").text("You Won!!");
}

function lose() {
    loss++;
    console.log(loss);
    $("#losses").text(loss);
    $("#win-loss").text("Try Again!!");
}

});
