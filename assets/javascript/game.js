//document.ready to load once page loads//
$(document).ready(function() {
	alert('Game Start!');
//vars//
    var targetNumber = Math.floor(Math.random() * 101 + 19);
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    //set html number to guess to the target number var, text format//
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);
    //link chosen target number to number to match, javascript to html//
    $('#numberToMatch').text(targetNumber);
    //set total wins/losses html to the javascript equivalent. html total number to the counter//
    $('#totalWins').text(wins);
    $('#totalLosses').text(losses);
    $('#yourScore').text(currentScore);

    //reset function for when game ends//
    function resetGame() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $('#numberToMatch').text(targetNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        currentScore = 0;
        $('#yourScore').text(currentScore);
    }

    //gem onclicks, logic//
    $('#Ruby').on('click', function() {
        currentScore = currentScore + num1;
        $('#yourScore').text(currentScore);
        if (currentScore === targetNumber) {
            alert('Winner!!!');
            wins++;
            $('#totalWins').text(wins);
            resetGame();
        } else if (currentScore >= targetNumber) {
            alert('Loser!!!');
            losses++;
            $('#totalLosses').text(losses);
            resetGame();
        }
    });

    $('#Sapphire').on('click', function() {
        currentScore = currentScore + num2;
        $('#yourScore').text(currentScore);
        if (currentScore === targetNumber) {
            alert('Winner!!!');
            wins++;
            $('#totalWins').text(wins);
            resetGame();
        } else if (currentScore >= targetNumber) {
            alert('Loser!!!');
            losses++;
            $('#totalLosses').text(losses);
            resetGame();
        }
    });

    $('#Emerald').on('click', function() {
        currentScore = currentScore + num3;
        $('#yourScore').text(currentScore);
        if (currentScore === targetNumber) {
            alert('Winner!!!');
            wins++;
            $('#totalWins').text(wins);
            resetGame();
        } else if (currentScore >= targetNumber) {
            alert('Loser!!!');
            losses++;
            $('#totalLosses').text(losses);
            resetGame();
        }
    });

    $('#YellowGem').on('click', function() {
        currentScore = currentScore + num4;
        $('#yourScore').text(currentScore);
        if (currentScore === targetNumber) {
            alert('Winner!!!');
            wins++;
            $('#totalWins').text(wins);
            resetGame();
        } else if (currentScore >= targetNumber) {
            alert('Loser!!!');
            losses++;
            $('#totalLosses').text(losses);
            resetGame();
        }
    });
});


