$(document).ready(function () {

    var lowGoal = 19;
    var highGoal = 102;
    var lowFlw = 1;
    var highFlw = 12;
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
        total = 0;
        flower = [
        pink = 0,
        orange = 0,
        purple = 0,
        aqua = 0
         ]

    // a random Goal number
         goalNumber = randomNumber(highGoal, lowGoal);

    // get random number between 1 and 12 for each flower
        for (var i = 0; i < 4; i++) {
        flower[i] = randomNumber(highFlw, lowFlw);

    }

    }
    //call the reset function 
    reset();

    
    //Print scores and Numbers to page
    renderHTML();

  

    $("#pink").on("click", function () {

        if (total < goalNumber) {
            total += flower[0];
            $("#total").text("Total: " + total);
            randomFlower();
        }

        winLose();

    });

    $("#orange").on("click", function () {


        if (total < goalNumber) {
            total += flower[1];
            $("#total").text("Total: " + total);
        }
        winLose();
        
    });

    $("#purple").on("click", function () {
        if (total < goalNumber) {
            total += flower[2];
            $("#total").text("Total: " + total);
        }
        winLose();
        
    });

    $("#aqua").on("click", function () {
        if (total < goalNumber) {
            total += flower[3];
            $("#total").text("Total: " + total);
        }
        winLose();
       
    });


    function randomNumber(max, min) {

        return ((Math.floor(Math.random() * max) + min));
    }

    function renderHTML() {

        $("#goal").text("Goal Number: " + goalNumber);
        $("#total").text("Total: " + total);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + loss);

    }

    //put a flower on a random spot on the page.
    // function randomFlower() {
    //     var h = window.innerHeight; 
    //     var w = window.innerWidth;
    //     var m = 0;
    //     xpos = randomNumber(w, m);
    //     ypos = randomNumber(h, m);

    //     console.log(w);
    //     console.log(h);
    //     console.log(xpos, ypos)

    //     $("#rndmFlwr").attr({
    //         top: w + "px",
    //         left: h + "px"
    //     });
    //     console.log("#rndmflr");
    //     $("#flower-display").append("#rndmFlr");
    // }

    function winLose () {
         if (total === goalNumber) {

            win();
        }
        if (total > goalNumber) {
            lose();
        }

    }
    function win() {

        wins++;
        $("#wins").text("Wins: " + wins);
        $("#win-loss").text("You Won!!");
        reset();
        renderHTML();
       
    }

    function lose() {
        loss++;
        $("#losses").text("Losses: " + loss);
        $("#win-loss").text("Try Again!!");
        reset();
        renderHTML();
       
    }

});
