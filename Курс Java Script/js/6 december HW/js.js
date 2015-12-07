/**
 * Created by rod on 06.12.15.
 */



var redRound = document.getElementById('red'), yellowRound = document.getElementById('yellow'), greenRound = document.getElementById('green');
var button = document.getElementById('on');


function switchOn () {
    setTimeout(function() {
        redRound.style.background='red';
    }, 1);

    setTimeout(function() {
        redRound.style.background='';
            }, 2000);

    setTimeout(function() {
        yellowRound.style.background='yellow';
    }, 2000);


    setTimeout(function() {
        yellowRound.style.background='';
    },4000);

    setTimeout(function() {
        greenRound.style.background='green';
    }, 4000);

    setTimeout(function() {
        greenRound.style.background=' ';
    }, 6000);
}


