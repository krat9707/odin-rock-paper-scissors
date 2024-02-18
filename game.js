function getComputerChoice()
{
    let val = (Math.random() * 100);

    if(val <= 33)
        return "Rock";
    else if(val <= 66)
        return "Paper";
    else    
        return "Scissors";
}

function roundResult(playerChoice, computerChoice)
{
    if(playerChoice == "rock")
    {
        if(computerChoice == "scissors")
            return true;
        else
            return false;
    }
    else if(playerChoice == "paper")
    {
        if(computerChoice == "rock")
            return true;
        else    
            return false;
    }
    else 
    {
        if(computerChoice == "paper")
            return true;
        else    
            return false;
    }
}

function playRound(playerChoice, computerChoice)
{
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice == computerChoice)
        return "Tie";
    else if(roundResult(playerChoice, computerChoice) == true)
        return "You Won!";
    else
        return "You Lost!";
}

function playGame()
{
    let playerChoice;
    let computerChoice;

    let res;
    let human = 0,
        bot = 0;

    for(i = 0; i < 5; ++i)
    {
        playerChoice = prompt("Enter The Choice : ");
        computerChoice = getComputerChoice();

        res = playRound(playerChoice, computerChoice);

        if(res == "You Won!")
            human++;
        else if(res == "You Lost!")
            bot++;
    }

    if(human > bot)
        return "You Won the Match!";
    else if(bot > human)
        return "You Lost the Match!";
    else    
        return "Match Tie!";
}

console.log(playGame());