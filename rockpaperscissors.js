////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit        */
////////////////////////////////////////////////

function playGame()
{
    var playerMove = getInput();
    var computerMove = randomPlay();

    var winner = getWinner(playerMove,computerMove);

    return winner
}

function getInput() 
{
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay()
 {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move
        if (move != null) 
        {
            move=move;
        }
        else 
        {
            move=getInput();
        }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
        if (move != null) 
        {
            move=move;
        }
        else 
        {
            move=randomPlay();
        }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove)
 {
    var winner;
        if  (playerMove == "rock" && computerMove =="paper") 
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="rock" && computerMove =="scissors")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="scissors" && computerMove =="rock")
        {
            winner = "computerWins"
            console.log("Computer Wins!");
        }
        else if (playerMove =="scissors" && computerMove =="paper")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="paper" && computerMove =="rock")
        {
            winner = "playerWins"
            console.log("Player Wins!");
        }
        else if (playerMove =="paper" && computerMove =="scissors")
        {
            winner = "computerWins"
            console.log("Player Wins!");
        }
        else
        {
            winner = "tie"
            console.log("It's a tie!")
        }
        return winner;

}

function playToFive() 
{
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 1;
    var computerWins = 1;

    while ( computerWins < 5 || playerWins < 5 )
    {
        var whoWins = playGame();
        if (whoWins == "computerWins")
         {
            console.log("Computer has just won " + computerWins +" games!");
            computerWins++;
         }
         else if (whoWins == "tie")
         {
            console.log("It's a tie!");
         }
         else
         {
            console.log("player has just won " + playerWins +" games!");
            playerWins++;
         }

    }

    return [playerWins, computerWins];
}

