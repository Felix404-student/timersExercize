/*
Author: Justin Brown
Assignment "Timers Exercise" for Springboard Bootcamp
Text: countdown
Write a function called countdown that accepts a number as a parameter 
and every 1000 milliseconds decrements the value and console.logs it. Once the 
value is 0 it should log “DONE!” and stop.
randomGame
Write a function called randomGame that selects a random number between 0 and 1 
every 1000 milliseconds and each time that a random number is picked, add 1 to a 
counter. If the number is greater than .75, stop the timer and console.log the 
number of tries it took before we found a number greater than .75.
*/

function countdown(num) {

    let i = num;

    function loop() {
         setTimeout(function(){
            console.log(i);
            i--;
            if (i > 0) {
                loop();
            }
        }, 1000)
    }

    loop(); // calls the above loop, or else it would not execute

    // has to calculate how long to wait for the loop to finish,
    // otherwise it prints first.
    setTimeout(function(){ console.log("DONE!") }, (num+1)*1000 );

    ;
}

function randomGame() {

    let count = 0;

    function loop() {
        setTimeout(function(){
            let i = Math.random();
            //console.log(i);  // for watching to check
            if (i < 0.75) {
                count++;
                loop();
           } else {
                console.log(count+1); // has to count the iteration that "failed"
           }
       }, 1000)
    }

    loop(); // calls the above loop, or else it would not execute
}

//countdown(10);
//randomGame();