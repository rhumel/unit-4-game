$(document).ready(function () {

    var lowGoal = 19;
    var highGoal = 102;
    var lowFlw = 1;
    var highFlw = 12;
    // var counter = 0;
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
        // var counter = 0;
        var goalNumber = 0;
        var total = 0;
        // var flower = [
        // pink = 0,
        // orange = 0,
        // purple = 0,
        // aqua = 0
        // ];

    }
    //call the reset function to 
    //reset();

    // a random Goal number
    goalNumber = randomNumber(highGoal, lowGoal);

    //Print scores and Numbers to page
    
    renderHTML();   
   
    // get random number between 1 and 12 for each flower
    for (var i = 0; i < 4; i++) {
        flower[i] = randomNumber(highFlw, lowFlw);
        console.log(flower[i]);
    }

    console.log(total);
    $("#pink").on("click", function () {

        if (total < goalNumber) {
            console.log(flower[0], total);
            total += flower[0];
            $("#total").text("Total: " + total);
            randomFlower();
        }

        if (total===goalNumber) {
            win();
        } 
        if (total > goalNumber) {
            lose();
        }   

        
    });


    $("#orange").on("click", function () {


        if (total < goalNumber) {
            console.log(flower[1], total);
            total += flower[1];
            $("#total").text("Total: " + total);
        }
        if (total===goalNumber) {
            win();
        } 
        if (total > goalNumber) {
            lose();
        }   
    });

    $("#purple").on("click", function () {
        console.log("clicked")

        if (total < goalNumber) {
            console.log(flower[2], total);
            total += flower[2];
            $("#total").text("Total: " + total);
        }
         if (total===goalNumber) {
             win();
         } 
         if (total > goalNumber) {
             lose();
         }   
    });

    $("#aqua").on("click", function () {
        console.log("clicked")

        if (total < goalNumber) {
            console.log(flower[3], total);
            total += flower[3];
            $("#total").text("Total: " + total);
        }
        if (total===goalNumber) {

            win();
        } 
        if (total > goalNumber) {
            lose();
        }   
    });


    // if (total === goalNumber) {
    //     win();
    // }
    // if (total > goalNumber) {
    //     lose();
    // }



    function randomNumber(max, min) {

        return ((Math.floor(Math.random() * max) + min));
    }

    function renderHTML(){

        $("#goal").text("Goal Number: " + goalNumber);
        $("#total").text("Total: " + total);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + loss);
    
    }

    //put a flower on a random spot on the page.
    function randomFlower() {
        var h = window.innerHeight;
        var w = window.innerWidth;
        var m = 0;
        xpos = randomNumber(w,m);
        ypos = randomNumber(h,m);
        
        console.log(w);    
        console.log(h);
        console.log(xpos,ypos)
    

    }
    function win() {

        wins++;
        console.log(wins);
        $("#wins").text("Wins: " + wins);
        $("#win-loss").text("You Won!!");
        reset();
        console.log("reset passed")
    }

    function lose() {
        loss++;
        console.log(loss);
        $("#losses").text("Losses: " + loss);
        $("#win-loss").text("Try Again!!");
        reset();
        console.log("reset passed")
    }

});
